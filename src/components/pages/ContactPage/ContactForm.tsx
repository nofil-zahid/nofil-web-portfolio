'use client';

import { ChangeEvent, SyntheticEvent, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import emailJs from '@emailjs/browser';
import Button from '@/components/core/Button';
import InputField from '@/components/core/InputField';
import {
  ContactField,
  ContactFormValues,
  contactSchema,
  EMAIL_LOCAL_MAX_LENGTH,
  MESSAGE_MAX_LENGTH,
  NAME_MAX_LENGTH,
} from '@/schema/form';
import { envVars } from '@/config/env';
import { showToast } from '@/utils/toaster';

const INITIAL_FORM: ContactFormValues = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormValues>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLock = useRef(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (!Object.prototype.hasOwnProperty.call(contactSchema.shape, name)) return;

    const field = name as ContactField;
    const normalizedValue =
      field === 'email'
        ? value.toLowerCase()
        : field === 'name'
          ? value.normalize('NFC')
          : value.replace(/\r\n?/g, '\n');

    setForm((prev) => ({ ...prev, [field]: normalizedValue }));
    setTouched((prev) => ({ ...prev, [field]: true }));

    const result = contactSchema.shape[field].safeParse(normalizedValue);

    setErrors((prev) => ({
      ...prev,
      [field]: result.success ? '' : (result.error.issues[0]?.message ?? 'Invalid input'),
    }));
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitLock.current) return;

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const nextErrors: Partial<Record<ContactField, string>> = {};
      const nextTouched: Partial<Record<ContactField, boolean>> = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0];

        if (typeof field !== 'string' || !Object.prototype.hasOwnProperty.call(contactSchema.shape, field)) {
          continue;
        }

        const key = field as ContactField;

        nextErrors[key] ??= issue.message;
        nextTouched[key] = true;
      }

      setErrors(nextErrors);
      setTouched((prev) => ({ ...prev, ...nextTouched }));

      showToast({
        text: 'Please check the highlighted fields and try again.',
        type: 'error',
      });
      return;
    }

    submitLock.current = true;
    setIsSubmitting(true);

    try {
      const response = await emailJs.send(
        envVars.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        envVars.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        result.data,
        envVars.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      if (response.status !== 200) {
        throw new Error(`EmailJS returned status ${response.status}`);
      }

      setForm(INITIAL_FORM);
      setErrors({});
      setTouched({});

      showToast({
        text: `Thanks for reaching out! I've received your message and will get back to you as soon as I can.`,
        type: 'success',
      });
    } catch (error) {
      if (envVars.NEXT_PUBLIC_NODE_ENV === 'development') {
        console.error('Contact form submission failed:', error);
      }
      showToast({
        text: 'Something went wrong while sending your message. Please try again or email me directly using the address below.',
        type: 'error',
      });
    } finally {
      submitLock.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <h2 className="sr-only">Send a Message</h2>
        <InputField
          id="contact-name"
          index="01"
          label="Your Name"
          name="name"
          placeholder="e.g. Nabeegh"
          value={form.name}
          onChange={handleChange}
          error={touched.name ? errors.name : undefined}
          disabled={isSubmitting}
          maxLength={NAME_MAX_LENGTH}
          spellCheck={false}
          autoComplete="off"
        />
        <InputField
          id="contact-email"
          index="02"
          label="Your Email"
          name="email"
          placeholder="e.g. subhan@example.com"
          value={form.email}
          onChange={handleChange}
          error={touched.email ? errors.email : undefined}
          disabled={isSubmitting}
          maxLength={EMAIL_LOCAL_MAX_LENGTH}
          spellCheck={false}
          autoComplete="email"
        />
        <InputField
          id="contact-msg"
          index="03"
          label="Your Message"
          name="message"
          multiline
          placeholder="e.g. I would like to discuss a potential collaboration..."
          value={form.message}
          onChange={handleChange}
          error={touched.message ? errors.message : undefined}
          disabled={isSubmitting}
          maxLength={MESSAGE_MAX_LENGTH}
          showCounter
          spellCheck={false}
          autoComplete="off"
        />

        <div className="flex w-full justify-start pt-2">
          <Button type="submit" isLoading={isSubmitting} loadingText="Sending..." customClass="w-full sm:w-auto">
            Send Message
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
