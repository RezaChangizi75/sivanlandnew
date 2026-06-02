"use client";

import { ChevronDown, Store } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

import { SectionCard } from "./SectionCard";

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
    <SectionCard className="p-3 sm:p-4">
      <div className="rounded-xl bg-muted p-3 sm:p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground">فروشنده</p>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("supplier-table");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="text-xs font-medium text-primary underline-offset-4 hover:underline"
            >
              مشاهده {product.supplierCount} فروشگاه دیگر
            </button>
          </div>

          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="grid size-14 shrink-0 place-items-center rounded-full border bg-white text-primary sm:size-16">
              <Store className="size-8 sm:size-9" />
            </div>
            <div className="min-w-0">
              <h2 className="truncate text-base font-bold sm:text-lg">{product.store.name}</h2>
              <p className="mt-1 text-xs text-muted-foreground">{product.store.responseRate}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                تعداد فروش موفق {product.store.salesCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 space-y-3 sm:my-5">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between gap-3 border-b border-border pb-2 text-sm"
          >
            <span className="text-muted-foreground">{label}:</span>
            <span className="text-left font-semibold">{value}</span>
          </div>
        ))}
        <div className="flex flex-wrap items-end justify-between gap-2 text-sm">
          <span className="text-muted-foreground">شروع قیمت از:</span>
          <strong className="text-lg sm:text-xl">
            {formatPrice(product.store.priceFrom)} تومان
          </strong>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <Button className="h-11 w-full">افزودن به سبد خرید</Button>
        <Button
          variant="outline"
          className="h-11 w-full"
          onClick={() => {
            const el = document.getElementById("supplier-table");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          سایر تامین کنندگان
          <ChevronDown className="size-4" />
        </Button>
      </div>
    </SectionCard>
  );
}
