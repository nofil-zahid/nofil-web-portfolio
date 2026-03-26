"use client";
import z from "zod";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import emailJs from "@emailjs/browser";
import Button from "@/components/core/Button";
import InputField from "@/components/core/InputField";
import { ContactFormValues, contactSchema, MESSAGE_MAX_LENGTH } from "@/schema/form";
import { showToast } from "@/utils/toaster";
import { envVars } from "@/config/env";

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const normalizedValue = name === "email" ? value.toLowerCase() : value.replace(/(\r?\n){3,}/g, "\n\n");

    setForm((prev) => ({ ...prev, [name]: normalizedValue }));  

    const fieldSchema = contactSchema.shape[name as keyof typeof contactSchema.shape];
    const result = fieldSchema.safeParse(normalizedValue);

    setErrors((prev) => ({
      ...prev,
      [name]: result.success ? "" : result.error.issues[0].message,
    }));
  };

  const handleError = (result: z.ZodSafeParseError<typeof form>) => {
    const formattedErrors: Record<string, string> = {};
    result.error.issues.forEach((issue) => {
      formattedErrors[issue.path[0] as string] = issue.message;
    });
    setErrors(formattedErrors);
    showToast({ type: "error", text: "Please fill all the fields correctly !" });
  };

  const handleSendEmail = async () => {
    try {
      const res = await emailJs.send(
        envVars.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        envVars.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        envVars.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      if (res.status === 200 || res.text === "OK") {
        setForm({ name: "", email: "", message: "" });
        showToast({ type: "success", text: "Email sent successfully !" });
      } else {
        showToast({ type: "error", text: "Failed to send email !" });
      }
    } catch (error) {
      console.error(error);
      showToast({ type: "error", text: "Failed to send email !" });
    } finally {
      setErrors({});
    }
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      handleError(result);
      return;
    }
    handleSendEmail();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        index="01"
        label="Name"
        name="name"
        placeholder="Nabeegh"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputField
        index="02"
        label="Email"
        name="email"
        placeholder="subhan@example.com"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputField
        index="03"
        label="Message"
        name="message"
        multiline
        placeholder="Tell me about your project or the opportunity you have in mind..."
        value={form.message}
        onChange={handleChange}
        error={errors.message}
        maxLength={MESSAGE_MAX_LENGTH}
        showCounter
      />

      <Button type="submit">
        Initialize Send
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform"
        />
      </Button>
    </form>
  );
};

export default ContactForm;
