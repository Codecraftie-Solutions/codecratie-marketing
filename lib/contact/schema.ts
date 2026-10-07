import { budgets, services, stages, timelines } from "@/lib/data/form";

export type Inquiry = {
  name: string; email: string; company: string; phone: string; build: string; problem: string;
  stage: string; service: string; timeline: string; budget: string; more: string;
};
export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;
export type InquiryResult = { ok: true; data: Inquiry } | { ok: false; errors: InquiryErrors };

// eslint-disable-next-line no-control-regex
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const text = (v: unknown) => (typeof v === "string" ? v.replace(CONTROL, "").trim() : "");
const line = (v: unknown) => text(v).replace(/[\r\n]+/g, " "); // blocks header injection
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+\d\s().-]{7,20}$/;
const oneOf = (list: readonly string[], v: string) => list.includes(v);

/** Shared by the form (client) and the API route (server). */
export function validateInquiry(input: unknown): InquiryResult {
  const r = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const d: Inquiry = {
    name: line(r.name), email: line(r.email).toLowerCase(), company: line(r.company), phone: line(r.phone),
    build: text(r.build), problem: text(r.problem), stage: line(r.stage), service: line(r.service),
    timeline: line(r.timeline), budget: line(r.budget), more: text(r.more),
  };
  const e: InquiryErrors = {};
  if (d.name.length < 2) e.name = "Enter your name.";
  else if (d.name.length > 100) e.name = "Keep your name under 100 characters.";
  if (!EMAIL.test(d.email) || d.email.length > 254) e.email = "Enter a valid email address, like name@company.com.";
  if (d.company.length > 120) e.company = "Keep this under 120 characters.";
  if (d.phone && !PHONE.test(d.phone)) e.phone = "Use digits, spaces and + only, or leave this blank.";
  if (d.build.length < 10) e.build = "Tell us a little more about what you want to build (at least 10 characters).";
  else if (d.build.length > 2000) e.build = "Keep this under 2000 characters.";
  if (d.problem.length > 2000) e.problem = "Keep this under 2000 characters.";
  if (d.more.length > 2000) e.more = "Keep this under 2000 characters.";
  if (!oneOf(stages, d.stage)) e.stage = "Choose a stage.";
  if (!oneOf(services, d.service)) e.service = "Choose a service.";
  if (!oneOf(timelines, d.timeline)) e.timeline = "Choose a timeline.";
  if (!oneOf(budgets, d.budget)) e.budget = "Choose a budget range.";
  return Object.keys(e).length ? { ok: false, errors: e } : { ok: true, data: d };
}
