import { notFound } from "next/navigation";
import { products } from "@/mocks/products";
import ProductDetailClient from "@/components/ProductDetailClient";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
