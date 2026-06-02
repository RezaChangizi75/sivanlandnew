"use client";

import { GalleryVerticalEnd } from "lucide-react";
import { ProductRelatedItem } from "@/feature/products/productDetails/types/productDetailsType.ts/types";
import { ProductBag } from "./ProductBag";
import { SectionCard } from "./SectionCard";

interface RelatedProductsProps {
  products: ProductRelatedItem[];
}

const formatPrice = (value: number) => value.toLocaleString("fa-IR");

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <SectionCard className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GalleryVerticalEnd className="size-5 text-muted-foreground" />
          <h2 className="text-lg font-bold">محصولات مرتبط</h2>
        </div>
        <span className="text-xs text-muted-foreground">مشاهده همه</span>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {products.map((item) => (
          <article key={item.id} className="rounded-xl border border-border bg-white p-3">
            <div className="relative mb-3 grid h-32 place-items-center rounded-lg bg-muted">
              {item.badge ? (
                <span className="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-[10px] text-white">
                  {item.badge}
                </span>
              ) : null}
              <ProductBag label={item.title} compact />
            </div>
            <h3 className="line-clamp-2 min-h-10 text-sm font-semibold leading-5">{item.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{item.supplier}</p>
            <p className="mt-3 text-sm font-bold">از {formatPrice(item.price)} تومان</p>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}
