import { NextResponse } from "next/server";
import { validateInquiry } from "@/lib/contact/schema";
import { EmailNotConfiguredError, sendProjectInquiry } from "@/lib/contact/send";

export const runtime = "nodejs";
const MAX_BYTES = 20_000;

export async function POST(req: Request) {
  if (!(req.headers.get("content-type") ?? "").includes("application/json"))
    return NextResponse.json({ ok: false, message: "Unsupported content type." }, { status: 415 });
  if (Number(req.headers.get("content-length") ?? 0) > MAX_BYTES)
    return NextResponse.json({ ok: false, message: "Submission is too large." }, { status: 413 });

  let body: unknown;
  try { body = await req.json(); }
  catch { return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 }); }

  // Honeypot: real users never fill this field. Pretend success so bots learn nothing.
  if (body && typeof body === "object" && (body as Record<string, unknown>).website) return NextResponse.json({ ok: true });

  const result = validateInquiry(body);
  if (!result.ok) return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });

  try {
    await sendProjectInquiry(result.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof EmailNotConfiguredError)
      return NextResponse.json({ ok: false, code: "not_configured", message: "We can't accept online submissions yet. Please try again later." }, { status: 503 });
    console.error("contact: delivery failed"); // no submission data in logs
    return NextResponse.json({ ok: false, message: "We couldn't send your inquiry. Please try again." }, { status: 500 });
  }
}
