"use client";

import { ChevronLeft, GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { ProductRelatedItem } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

import { SectionCard } from "./SectionCard";

interface RelatedProductsProps {
  products: ProductRelatedItem[];
}

const formatPrice = (value: number) => value.toLocaleString("fa-IR");

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <SectionCard className="overflow-hidden p-3 sm:p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <GalleryVerticalEnd className="size-5 shrink-0 text-muted-foreground" />
          <h2 className="truncate text-base font-bold sm:text-lg">محصولات مرتبط</h2>
        </div>
        <Link
          href="/products"
          className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <span>مشاهده همه</span>
          <ChevronLeft size={12} />
        </Link>
      </div>

      <div className="-mx-3 overflow-x-auto px-3 pb-2 no-scrollbar sm:-mx-4 sm:px-4">
        <div className="flex snap-x snap-mandatory gap-3">
          {products.map((item, index) => {
            const imageSrc = item.image ?? ["/1.png", "/2.png", "/3.png"][index % 3];

            return (
              <article
                key={item.id}
                className="w-[72%] min-w-[210px] max-w-[260px] shrink-0 snap-start rounded-xl border border-border bg-white p-3 sm:w-[42%] md:w-[30%] lg:w-[23%] xl:w-[19%]"
              >
                <div className="relative mb-3 h-32 overflow-hidden rounded-lg bg-white">
                  <Image src={imageSrc} alt={item.title} fill className="object-contain" />
                  {item.badge ? (
                    <span className="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-[10px] text-white">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="line-clamp-2 min-h-10 text-sm font-semibold leading-5">
                  {item.title}
                </h3>
                <p className="mt-1 truncate text-xs text-muted-foreground">{item.supplier}</p>
                <p className="mt-3 text-sm font-bold">
                  از {formatPrice(item.price)} تومان
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionCard>
  );
}
