"use client";

import type { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

interface ProductSummaryProps {
  product: ProductDetails;
}

export function ProductSummary({ product }: ProductSummaryProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 flex justify-between">
        <div>
        <h1 className="text-xl font-bold leading-9 text-card-foreground md:text-2xl">{product.title}</h1>
        <p className="text-sm text-muted-foreground">
          تعداد تامین کننده: {product.supplierCount} تامین کننده
        </p>
        </div>
        <p className="text-xs text-muted-foreground">تاریخ بروزرسانی: {product.updatedAt}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {product.metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl bg-muted px-3 py-3 text-center">
            <p className="text-xs text-muted-foreground">{metric.label}</p>
            <p className="mt-1 text-sm font-semibold text-card-foreground">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
