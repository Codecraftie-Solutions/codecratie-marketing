export type ProductStatus = "Live" | "Building" | "Experiment" | "Coming soon";
export type Product = { name: string; status: ProductStatus; problem: string; whatItDoes: string; url?: string };

export const productStatuses: ProductStatus[] = ["Live", "Building", "Experiment", "Coming soon"];
/** Add only verified products. An empty list renders the empty state. */
export const products: Product[] = [];
