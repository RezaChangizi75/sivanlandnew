import { ProductHeroSection } from '@/feature/products/productDetails/sections/ProductDetailsSection'

interface ProductIdPageProps {
  params: {
    id: string;
  };
}

export default async function ProductId({ params }: ProductIdPageProps) {
  const { id } = params;

  return <ProductHeroSection productId={id} />;
}
