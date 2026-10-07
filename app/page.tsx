import { site } from "@/lib/constants/site";
import { pageMetadata } from "@/lib/utils/metadata";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/hero/Marquee";
import { Intro } from "@/components/services/Intro";
import { Services } from "@/components/services/Services";
import { Process } from "@/components/process/Process";
import { Work } from "@/components/work/Work";
import { Capabilities } from "@/components/services/Capabilities";
import { Statement } from "@/components/ecosystem/Statement";
import { Ecosystem } from "@/components/ecosystem/Ecosystem";
import { Why } from "@/components/about/Why";
import { Products } from "@/components/products/Products";
import { About } from "@/components/about/About";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { images } from "@/lib/data/images";
import { CtaBand } from "@/components/contact/CtaBand";

export const metadata = pageMetadata({
  title: "CodeCraftie Solutions — We Build Technology That Moves Businesses Forward",
  description: site.description,
  path: "/",
  absolute: true,
});

export default function Home() {
  return (
    <>
      <Hero /><Marquee /><Intro /><Services /><Process /><PhotoBand img={images.process} caption="From first conversation to production." /><Work /><Capabilities />
      <Statement /><Ecosystem /><Why /><Products /><About /><CtaBand />
    </>
  );
}
