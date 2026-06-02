"use client";

import type { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

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

      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
        {product.metrics.map((metric) => (
          <div
            key={metric.label}
            className="min-h-20 rounded-xl bg-muted px-2 py-3 text-center sm:px-3"
          >
            <p className="text-xs text-muted-foreground">{metric.label}</p>
            <p className="mt-1 text-sm font-semibold text-card-foreground">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
