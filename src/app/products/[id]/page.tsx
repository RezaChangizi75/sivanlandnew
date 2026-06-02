import { ProductDetailsSection } from "@/feature/products/productDetails/sections/ProductDetailsSection";

interface ProductIdPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductId({ params }: ProductIdPageProps) {
  const { id } = await params;

  return <ProductDetailsSection productId={id} />;
}
