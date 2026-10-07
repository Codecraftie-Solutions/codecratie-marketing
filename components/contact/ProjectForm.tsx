"use client";

import { useState, type FormEvent } from "react";
import { budgets, formDefaults, services, stages, timelines } from "@/lib/data/form";
import { validateInquiry, type InquiryErrors } from "@/lib/contact/schema";
import { Field, aria } from "@/components/ui/Field";

type Status = "idle" | "loading" | "success" | "error";

export function ProjectForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [message, setMessage] = useState("");

  function showErrors(e: InquiryErrors) {
    setErrors(e);
    setStatus("idle");
    const first = Object.keys(e)[0];
    if (first) document.getElementById(first)?.focus();
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const raw = Object.fromEntries(new FormData(ev.currentTarget).entries());
    const result = validateInquiry(raw);
    if (!result.ok) return showErrors(result.errors);

    setErrors({});
    setMessage("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(raw) });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; errors?: InquiryErrors; message?: string } | null;
      if (res.ok && data?.ok) return setStatus("success");
      if (data?.errors) return showErrors(data.errors);
      setMessage(data?.message ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setMessage("Network error. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success")
    return (
      <div id="done" role="status" tabIndex={-1} ref={(el) => el?.focus()} style={{ display: "block" }}>
        <strong>Thanks.</strong> We&apos;ve received your project details. We&apos;ll review the requirement and get back to you.
      </div>
    );

  const e = errors;
  return (
    <>
      <form onSubmit={onSubmit} noValidate aria-label="Project inquiry">
        <Field id="name" label="Name" error={e.name}><input id="name" name="name" required autoComplete="name" {...aria("name", e.name)} /></Field>
        <Field id="email" label="Email" error={e.email}><input id="email" name="email" type="email" required autoComplete="email" {...aria("email", e.email)} /></Field>
        <Field id="company" label="Company" error={e.company}><input id="company" name="company" autoComplete="organization" {...aria("company", e.company)} /></Field>
        <Field id="phone" label="Phone" hint="optional" error={e.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" {...aria("phone", e.phone)} /></Field>
        <Field id="build" label="What are you trying to build?" error={e.build} full><textarea id="build" name="build" required {...aria("build", e.build)} /></Field>
        <Field id="problem" label="What problem are you trying to solve?" error={e.problem} full><textarea id="problem" name="problem" {...aria("problem", e.problem)} /></Field>
        <Field id="stage" label="Current stage" error={e.stage}>
          <select id="stage" name="stage" defaultValue={formDefaults.stage} {...aria("stage", e.stage)}>{stages.map((o) => <option key={o}>{o}</option>)}</select>
        </Field>
        <Field id="service" label="Service" error={e.service}>
          <select id="service" name="service" defaultValue={formDefaults.service} {...aria("service", e.service)}>{services.map((o) => <option key={o}>{o}</option>)}</select>
        </Field>
        <Field id="timeline" label="Timeline" error={e.timeline}>
          <select id="timeline" name="timeline" defaultValue={formDefaults.timeline} {...aria("timeline", e.timeline)}>{timelines.map((o) => <option key={o}>{o}</option>)}</select>
        </Field>
        <Field id="budget" label="Budget" error={e.budget}>
          <select id="budget" name="budget" defaultValue={formDefaults.budget} {...aria("budget", e.budget)}>{budgets.map((o) => <option key={o}>{o}</option>)}</select>
        </Field>
        <Field id="more" label="Additional information" error={e.more} full><textarea id="more" name="more" {...aria("more", e.more)} /></Field>
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0">
          <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <div className="f w">
          <button className="btn p" type="submit" disabled={status === "loading"} aria-busy={status === "loading"}>
            {status === "loading" ? "Sending…" : "Submit Project Inquiry"}
          </button>
        </div>
      </form>
      {status === "error" && (
        <div id="done" className="fail" role="alert" tabIndex={-1} ref={(el) => el?.focus()} style={{ display: "block" }}>
          <strong>Your inquiry wasn&apos;t sent.</strong> {message}
        </div>
      )}
    </>
  );
}
