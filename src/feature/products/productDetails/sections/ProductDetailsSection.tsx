"use client";

import { useMemo } from "react";
import { useGetProductDetailsQuery } from "@/store/productsApi";
import { SupplierTable } from "../component/SupplierTable";
import { ContactBanner, ProductDetailsSkeleton, ProductExpertCard, ProductTabs, PromoBanners, RelatedProducts, SectionCard } from "../component";
import { ProductGallery } from "../component/ProductGallery";
import { ProductSummary } from "../component/ProductSummary";
import { StoreDetails } from "../component/StoreDetails";


interface ProductDetailsSectionProps {
  productId: string;
}

export function ProductDetailsSection({ productId }: ProductDetailsSectionProps) {
  const { data: product, isLoading } = useGetProductDetailsQuery(productId);
  const breadcrumb = useMemo(() => product?.categoryTrail.join("، "), [product]);

  if (isLoading || !product) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container-page space-y-4 py-4 sm:space-y-5 sm:py-5 md:py-8">
        <p className="hidden text-sm text-muted-foreground md:block">{breadcrumb}</p>

        <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(300px,340px)] lg:items-start xl:gap-5">
          <div className="min-w-0 space-y-4 lg:order-1 xl:justify-center">
            <SectionCard className="overflow-hidden p-3 sm:p-4 md:p-6 xl:min-h-[900px]">
              <div className="grid min-w-0 gap-5 xl:grid-cols-[minmax(280px,330px)_minmax(0,1fr)]">
                <ProductGallery product={product} />
                <ProductSummary product={product} />
              </div>
              <div className="mt-5 min-w-0 md:mt-6">
                <ProductTabs product={product} />
              </div>
            </SectionCard>
          </div>

          <aside className="min-w-0 space-y-4 lg:sticky lg:top-6 lg:order-2">
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
