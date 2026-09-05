"use client";

import { useState } from "react";
import { CakeSlice } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { FormSuccess } from "@/components/shared/form-success";
import { cakeCategories, cakeFlavors, cakeSizes } from "@/data/cakes";

export function CakeOrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    cakeType: "Celebration",
    size: cakeSizes[0].label,
    flavor: cakeFlavors[0].name,
    custom: "",
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
    setValue({
      name: "",
      phone: "",
      email: "",
      eventDate: "",
      cakeType: "Celebration",
      size: cakeSizes[0].label,
      flavor: cakeFlavors[0].name,
      custom: "",
      message: "",
    });
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Cake order received"
        message="Thank you! We'll review your order and reply with a quote and confirmation within a few working hours."
        detail={`${value.cakeType} · ${value.size} · ${value.flavor}`}
        onReset={reset}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="c-name">
          <Input
            id="c-name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            required
            value={value.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </Field>
        <Field label="Phone" htmlFor="c-phone">
          <Input
            id="c-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="01XXX-XXXXXX"
            required
            value={value.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="c-email">
        <Input
          id="c-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={value.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Event date" htmlFor="c-date" hint="The day the cake is needed.">
          <Input
            id="c-date"
            name="eventDate"
            type="date"
            required
            value={value.eventDate}
            onChange={(e) => update("eventDate", e.target.value)}
          />
        </Field>
        <Field label="Cake type" htmlFor="c-type">
          <Select
            id="c-type"
            name="cakeType"
            value={value.cakeType}
            onChange={(e) => update("cakeType", e.target.value)}
          >
            {cakeCategories.map((c) => (
              <option key={c.label} value={c.label}>
                {c.label}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Size" htmlFor="c-size">
          <Select
            id="c-size"
            name="size"
            value={value.size}
            onChange={(e) => update("size", e.target.value)}
          >
            {cakeSizes.map((s) => (
              <option key={s.label} value={s.label}>
                {s.label} — {s.serves}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Flavour" htmlFor="c-flavor">
          <Select
            id="c-flavor"
            name="flavor"
            value={value.flavor}
            onChange={(e) => update("flavor", e.target.value)}
          >
            {cakeFlavors.map((f) => (
              <option key={f.name} value={f.name}>
                {f.name} — {f.hint}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Custom requirements" htmlFor="c-custom" hint="Theme, colours, characters, message topper, dietary needs, etc.">
        <Textarea
          id="c-custom"
          name="custom"
          rows={3}
          placeholder="e.g. Dusty pink and gold theme, 'Happy Birthday Amma' topper, no nuts…"
          value={value.custom}
          onChange={(e) => update("custom", e.target.value)}
        />
      </Field>

      <Field label="Additional message" htmlFor="c-message">
        <Textarea
          id="c-message"
          name="message"
          rows={2}
          placeholder="Anything else you'd like us to know?"
          value={value.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </Field>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          We&apos;ll confirm pricing and availability before charging.
        </p>
        <Button type="submit" size="lg" variant="accent">
          <CakeSlice aria-hidden className="h-4 w-4" />
          Send my cake order
        </Button>
      </div>
    </form>
  );
}
