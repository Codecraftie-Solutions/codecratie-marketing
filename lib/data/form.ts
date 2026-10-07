export const stages = ["Just an idea", "Planning", "Prototype", "Existing product", "Existing system needing improvement"] as const;
export const services = ["Web", "Mobile", "SaaS / MVP", "Backend/API", "AI / Automation", "Business Technology", "Existing Product", "Not sure"] as const;
export const timelines = ["ASAP", "1–3 months", "3–6 months", "Flexible"] as const;
export const budgets = ["Under ₦500k", "₦500k–₦2m", "₦2m–₦5m", "₦5m+", "Not sure"] as const;
export const formDefaults = { stage: stages[0], service: "Not sure", timeline: "Flexible", budget: "Not sure" };
