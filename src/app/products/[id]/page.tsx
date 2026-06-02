import { ProductHeroSection } from '@/feature/products/productDetails/sections/ProductHeroSection/ProductHeroSection'

interface ProductIdPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductId({ params }: ProductIdPageProps) {
  const { id } = await params;

  return <ProductHeroSection productId={id} />;
}
