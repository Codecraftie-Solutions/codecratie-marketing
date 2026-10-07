import { pageMetadata } from "@/lib/utils/metadata";
import { Work } from "@/components/work/Work";

export const metadata = pageMetadata({ title: "Selected Work", description: "Selected projects from CodeCraftie Solutions. Case studies are added as each project is verified.", path: "/work" });
export default function Page() { return <Work as="h1" />; }
