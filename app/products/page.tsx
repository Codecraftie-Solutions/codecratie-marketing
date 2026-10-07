import { pageMetadata } from "@/lib/utils/metadata";
import { Products } from "@/components/products/Products";

export const metadata = pageMetadata({ title: "Products", description: "Products and experiments from CodeCraftie Solutions. Listings are added as products are verified.", path: "/products" });
export default function Page() { return <Products as="h1" />; }
