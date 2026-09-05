"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, Input, Textarea } from "@/components/ui/field";
import { FormSuccess } from "@/components/shared/form-success";
import { site } from "@/data/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function update(field: keyof typeof value, val: string) {
    setValue((prev) => ({ ...prev, [field]: val }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function reset() {
    setSubmitted(false);
    setValue({ name: "", email: "", phone: "", message: "" });
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Message sent"
        message="Thanks for reaching out — we usually reply within one working day."
        onReset={reset}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="m-name">
          <Input
            id="m-name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            required
            value={value.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </Field>
        <Field label="Email" htmlFor="m-email">
          <Input
            id="m-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            value={value.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>
      </div>

      <Field label="Phone" htmlFor="m-phone" hint="Optional — helpful for quicker replies.">
        <Input
          id="m-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="01XXX-XXXXXX"
          value={value.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
      </Field>

      <Field label="Message" htmlFor="m-message">
        <Textarea
          id="m-message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          required
          value={value.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </Field>

      <Button type="submit" size="lg">
        <Send aria-hidden className="h-4 w-4" />
        Send message
      </Button>

      <p className="text-xs text-muted">
        Prefer a quick reply?{" "}
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-caramel underline-offset-4 hover:underline"
        >
          Chat with us on WhatsApp
        </a>
        .
      </p>
    </form>
  );
}
