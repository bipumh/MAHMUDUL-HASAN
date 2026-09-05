"use client";

import { useState } from "react";
import { CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { FormSuccess } from "@/components/shared/form-success";
import { site } from "@/data/site";

const timeSlots = [
  "7:30 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
  "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11+"];

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    request: "",
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
    setValue({ name: "", phone: "", email: "", date: "", time: "", guests: "2", request: "" });
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Reservation request received"
        message="Thank you! Our team will confirm your table within the hour during opening times."
        detail={`${value.guests} guest${value.guests === "1" ? "" : "s"} · ${value.date ? new Date(value.date).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }) : ""} · ${value.time}`}
        onReset={reset}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="r-name">
          <Input
            id="r-name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            required
            value={value.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </Field>
        <Field label="Phone" htmlFor="r-phone">
          <Input
            id="r-phone"
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

      <Field label="Email" htmlFor="r-email">
        <Input
          id="r-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={value.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Date" htmlFor="r-date">
          <Input
            id="r-date"
            name="date"
            type="date"
            required
            value={value.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </Field>
        <Field label="Time" htmlFor="r-time">
          <Select
            id="r-time"
            name="time"
            required
            value={value.time}
            onChange={(e) => update("time", e.target.value)}
          >
            <option value="" disabled>
              Select time
            </option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Guests" htmlFor="r-guests">
          <Select
            id="r-guests"
            name="guests"
            value={value.guests}
            onChange={(e) => update("guests", e.target.value)}
          >
            {guestOptions.map((g) => (
              <option key={g} value={g}>
                {g} {g === "1" ? "guest" : "guests"}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Special request" htmlFor="r-request" hint="Occasion, seating preference, accessibility needs — anything that helps us prepare.">
        <Textarea
          id="r-request"
          name="request"
          rows={3}
          placeholder="e.g. Window table, celebrating a birthday, high chair for a toddler…"
          value={value.request}
          onChange={(e) => update("request", e.target.value)}
        />
      </Field>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          We confirm every table within the hour. No card required.
        </p>
        <Button type="submit" size="lg">
          <CalendarHeart aria-hidden className="h-4 w-4" />
          Reserve my table
        </Button>
      </div>

      <p className="text-center text-xs text-muted sm:text-left">
        Prefer to book instantly?{" "}
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-caramel underline-offset-4 hover:underline"
        >
          Message us on WhatsApp
        </a>
        .
      </p>
    </form>
  );
}
