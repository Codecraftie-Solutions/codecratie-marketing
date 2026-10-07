import { pageMetadata } from "@/lib/utils/metadata";
import { AcademyIntro } from "@/components/ecosystem/AcademyIntro";

export const metadata = pageMetadata({ title: "Academy", description: "CodeCraftie Academy helps students develop practical software engineering and AI skills through project-based learning. It runs as a separate website.", path: "/academy" });
export default function Page() { return <AcademyIntro />; }
