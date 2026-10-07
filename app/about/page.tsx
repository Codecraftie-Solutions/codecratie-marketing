import { pageMetadata } from "@/lib/utils/metadata";
import { About } from "@/components/about/About";

export const metadata = pageMetadata({ title: "About", description: "CodeCraftie Solutions is a technology company that builds software, develops technology talent and creates opportunities through technology.", path: "/about" });
export default function Page() { return <About as="h1" />; }
