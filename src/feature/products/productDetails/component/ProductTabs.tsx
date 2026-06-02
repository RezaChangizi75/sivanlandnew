"use client";

import { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductTabsProps {
  product: ProductDetails;
}

export function ProductTabs({ product }: ProductTabsProps) {
  return (

    <Tabs defaultValue="review" className="space-y-4" dir="rtl">
      <div className="border-b">
      <TabsList className="flex bg-transparent gap-0">
        <TabsTrigger value="review" className="flex-1 rounded-b-none px-4 py-3 text-sm font-semibold text-foreground/70 hover:bg-muted/50 data-[state=active]:bg-[#202027] data-[state=active]:text-white transition-all">نقد و بررسی</TabsTrigger>
        <TabsTrigger value="specs" className="flex-1 rounded-b-none px-4 py-3 text-sm font-semibold text-foreground/70 hover:bg-muted/50 data-[state=active]:bg-[#202027] data-[state=active]:text-white transition-all">مشخصات محصول</TabsTrigger>
      </TabsList>
      </div>

      <TabsContent value="review" className="space-y-6 px-1 py-6 text-sm leading-8 text-muted-foreground md:px-3">
        {product.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </TabsContent>

      <TabsContent value="specs" className="grid gap-x-8 gap-y-5 px-1 py-6 md:grid-cols-2 md:px-3">
        {product.specs.map((spec) => (
          <div key={spec.label} className="grid grid-cols-2 gap-3 border-b border-border/70 pb-3">
            <dt className="text-sm text-muted-foreground">{spec.label}</dt>
            <dd className="text-sm font-semibold text-card-foreground">{spec.value}</dd>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  );
}
