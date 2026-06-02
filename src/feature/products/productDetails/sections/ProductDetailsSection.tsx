"use client";

import { useMemo } from "react";
import { useGetProductDetailsQuery } from "@/store/productsApi";
import { SupplierTable } from "../component/SupplierTable";
import { ContactBanner, ProductDetailsSkeleton, ProductExpertCard, ProductTabs, PromoBanners, RelatedProducts, SectionCard } from "../component";
import { ProductGallery } from "../component/ProductGallery";
import { ProductSummary } from "../component/ProductSummary";
import { StoreDetails } from "../component/StoreDetails";


interface ProductHeroSectionProps {
  productId: string;
}

export function ProductHeroSection({ productId }: ProductHeroSectionProps) {
  const { data: product, isLoading } = useGetProductDetailsQuery(productId);
  const breadcrumb = useMemo(() => product?.categoryTrail.join("، "), [product]);

  if (isLoading || !product) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 space-y-5 py-5 md:py-8">
        <p className="hidden text-sm text-muted-foreground md:block">{breadcrumb}</p>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div className="space-y-5 lg:order-1">
            <SectionCard className="p-4 md:p-6">
              <div className="grid gap-6 xl:grid-cols-[330px_minmax(0,1fr)]">
                <ProductGallery product={product} />
                <ProductSummary product={product} />
              </div>
              <div className="mt-6">
                <ProductTabs product={product} />
              </div>
            </SectionCard>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-6 lg:order-2">
            <StoreDetails product={product} />
            <ProductExpertCard product={product} />
          </aside>
        </div>

        <div id="supplier-table">
          <SupplierTable title="تامین کنندگان دیگر" suppliers={product.suppliers} compactActions />
        </div>
        <RelatedProducts products={product.relatedProducts} />
        <SupplierTable title="محصولات مرتبط" suppliers={product.supportSuppliers} />
        <PromoBanners />
        <ContactBanner />
      </div>
    </main>
  );
}
