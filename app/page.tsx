import { site } from "@/lib/constants/site";
import { pageMetadata } from "@/lib/utils/metadata";
import { Hero } from "@/components/home/Hero";
import { Academy, Cta, Founder, Process, ProductsStrip, SelectedWork, Services } from "@/components/home/Sections";

export const metadata = pageMetadata({
  title: `${site.name}: software studio in Lagos`,
  description: site.description,
  path: "/",
  absolute: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <Process />
      <ProductsStrip />
      <Founder />
      <Academy />
      <Cta />
    </>
  );
}
