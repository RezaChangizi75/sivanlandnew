"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

interface ProductTabsProps {
  product: ProductDetails;
}

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs defaultValue="review" className="min-w-0 space-y-4" dir="rtl">
      <div className="overflow-x-auto border-b no-scrollbar">
        <TabsList className="flex h-auto min-w-max justify-start gap-0 bg-transparent p-0">
          <TabsTrigger
            value="review"
            className="min-w-32 rounded-b-none px-4 py-3 text-sm font-semibold text-foreground/70 transition-all hover:bg-muted/50 data-[state=active]:bg-[#202027] data-[state=active]:text-white"
          >
            نقد و بررسی
          </TabsTrigger>
          <TabsTrigger
            value="specs"
            className="min-w-36 rounded-b-none px-4 py-3 text-sm font-semibold text-foreground/70 transition-all hover:bg-muted/50 data-[state=active]:bg-[#202027] data-[state=active]:text-white"
          >
            مشخصات محصول
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent
        value="review"
        className="space-y-4 px-1 py-4 text-sm leading-8 text-muted-foreground md:px-3 md:py-6"
      >
        {product.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </TabsContent>

      <TabsContent
        value="specs"
        className="grid gap-x-8 gap-y-3 px-1 py-4 md:grid-cols-2 md:px-3 md:py-6"
      >
        {product.specs.map((spec) => (
          <div
            key={spec.label}
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3 border-b border-border/70 pb-3"
          >
            <dt className="text-sm text-muted-foreground">{spec.label}</dt>
            <dd className="text-sm font-semibold text-card-foreground">{spec.value}</dd>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  );
}
