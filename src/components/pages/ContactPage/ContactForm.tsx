'use client';

import z from 'zod';
import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import emailJs from '@emailjs/browser';
import Button from '@/components/core/Button';
import InputField from '@/components/core/InputField';
import { ContactFormValues, contactSchema, MESSAGE_MAX_LENGTH } from '@/schema/form';
import { envVars } from '@/config/env';
import { useBooleanToggle } from '@/hooks/core/use-boolean-toggle';

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormValues>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [streamStatus, setStreamStatus] = useState<'idle' | 'streaming' | 'success' | 'error'>('idle');

  const { state: isSubmitting, enable: startSubmitting, disable: stopSubmitting } = useBooleanToggle();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const normalizedValue = name === 'email' ? value.toLowerCase() : value.replace(/(\r?\n){3,}/g, '\n\n');

    setForm((prev) => ({ ...prev, [name]: normalizedValue }));
    setTouched((prev) => ({ ...prev, [name]: true }));

    const fieldSchema = contactSchema.shape[name as keyof typeof contactSchema.shape];
    const result = fieldSchema.safeParse(normalizedValue);

    setErrors((prev) => ({
      ...prev,
      [name]: result.success ? '' : result.error.issues[0].message,
    }));
  };

  const handleError = (result: z.ZodSafeParseError<typeof form>) => {
    const formattedErrors: Record<string, string> = {};
    const touchedFields: Record<string, boolean> = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      formattedErrors[field] = issue.message;
      touchedFields[field] = true;
    });
    setErrors(formattedErrors);
    setTouched((prev) => ({ ...prev, ...touchedFields }));
  };

  const handleSendEmail = async () => {
    startSubmitting();
    setStreamStatus('streaming');

    try {
      const res = await emailJs.send(
        envVars.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        envVars.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        envVars.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      await new Promise((r) => setTimeout(r, 1900));

      if (res.status === 200 || res.text === 'OK') {
        setForm({ name: '', email: '', message: '' });
        setTouched({});
        setErrors({});
        setStreamStatus('success');
      } else {
        setStreamStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStreamStatus('error');
    } finally {
      stopSubmitting();
    }
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      handleError(result);
      return;
    }
    await handleSendEmail();
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <h2 className="sr-only">Send a Message</h2>
        <InputField
          index="01"
          label="Your Name"
          name="name"
          placeholder="e.g. Nabeegh"
          value={form.name}
          onChange={handleChange}
          error={touched.name ? errors.name : undefined}
          disabled={isSubmitting}
          spellCheck={false}
          autoComplete="off"
        />
        <InputField
          index="02"
          label="Your Email"
          name="email"
          placeholder="e.g. subhan@example.com"
          value={form.email}
          onChange={handleChange}
          error={touched.email ? errors.email : undefined}
          disabled={isSubmitting}
          spellCheck={false}
          autoComplete="off"
        />
        <InputField
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
          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting || streamStatus === 'streaming'}
            customClass="w-full sm:w-auto"
          >
            {isSubmitting ? (
              <>
                Transmitting...
                <Loader2 size={18} className="animate-spin" />
              </>
            ) : (
              <>
                Initialize Transmission
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
