"use client";

import { ChevronDown, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCard } from "./SectionCard";
import type { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

interface StoreDetailsProps {
  product: ProductDetails;
}

const formatPrice = (value: number) => value.toLocaleString("fa-IR");

export function StoreDetails({ product }: StoreDetailsProps) {
  const rows = [
    ["موجودی کالا", product.store.stock],
    ["زمان تحویل", product.store.deliveryTime],
    ["نحوه ارسال", product.store.deliveryMethod],
  ] as const;

  return (
    <SectionCard className="p-4">
      <div className="rounded-xl bg-muted p-4">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <p className="text-xs text-muted-foreground">مشاهده</p>
            <p className="text-xs text-primary underline">مشاهده 6 فروشگاه دیگر</p>
          </div>
          <div className="flex items-center gap-4">
          <div className="grid size-16 place-items-center rounded-full border bg-white text-primary">
            <Store className="size-9" />
          </div>
          <div className="">
            <h2 className="text-lg font-bold">{product.store.name}</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {product.store.responseRate} 
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              تعداد فروش موفق {product.store.salesCount} 
            </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 space-y-3">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between border-b border-border pb-2 text-sm">
            <span className="text-muted-foreground">{label}:</span>
            <span className="font-semibold">{value}</span>
          </div>
        ))}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">شروع قیمت از:</span>
          <strong className="text-xl">{formatPrice(product.store.priceFrom)} تومان</strong>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto] gap-2">
        <Button
          variant="outline"
          className="h-11 min-w-36"
          onClick={() => {
            const el = document.getElementById("supplier-table");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          سایر تامین کنندگان
          <ChevronDown className="size-4" />
        </Button>
        <Button className="h-11">افزودن به سبد خرید</Button>
      </div>
    </SectionCard>
  );
}
