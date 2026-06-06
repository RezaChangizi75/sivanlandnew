"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface ProductSummaryProps {
  product: ProductDetails;
}

export function ProductSummary({ product }: ProductSummaryProps) {
  return (
    <div className="min-w-0 space-y-5 md:space-y-6">
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <h1 className="text-lg font-bold leading-8 text-card-foreground sm:text-xl md:text-2xl md:leading-9">
            {product.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            تعداد تامین کننده: {product.supplierCount} تامین کننده
          </p>
        </div>
        <p className="shrink-0 text-xs text-muted-foreground sm:pt-1">
          تاریخ بروزرسانی: {product.updatedAt}
        </p>
      </div>

      <div className="md:hidden flex flex-col gap-4">
          <div className="flex justify-between gap-2">
          <h2 className="text-base font-bold sm:text-lg">مشخصات کالا</h2>
          <Link
              href="/products"
              className="flex items-end gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <span>مشاهده همه</span>
              <ChevronLeft size={12} />
            </Link>
        </div>
        
      <Carousel
        opts={{
        direction: "rtl",
        align: "start",
        dragFree: true,
        }}
      >
      <CarouselContent className="-ml-2">
        {product.metrics.map((metric) => (
          <CarouselItem
            key={metric.label}
            className="basis-[140px] pl-2"
          >
            <div className="min-h-20 rounded-xl bg-muted px-3 py-3 text-center">
              <p className="text-xs text-muted-foreground">
                {metric.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-card-foreground">
                {metric.value}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>

  {/* Desktop Grid */}
  {/* grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 */}
  <div className="hidden md:grid md:grid-cols-3 gap-3">
    {product.metrics.map((metric) => (
      <div
        key={metric.label}
        className="min-h-20 rounded-xl bg-muted px-3 py-3 text-center"
      >
        <p className="text-xs text-muted-foreground">
          {metric.label}
        </p>
        <p className="mt-1 text-sm font-semibold text-card-foreground">
          {metric.value}
        </p>
      </div>
    ))}
  </div>
    </div>
  );
}
