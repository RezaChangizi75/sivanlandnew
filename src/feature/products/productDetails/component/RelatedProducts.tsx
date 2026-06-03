"use client";

import { ChevronLeft, GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ProductRelatedItem } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

import { SectionCard } from "./SectionCard";

interface RelatedProductsProps {
  products: ProductRelatedItem[];
}

const fallbackImages = ["/1.png", "/2.png", "/3.png"];

const formatPrice = (value: number) => value.toLocaleString("fa-IR");

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products.length) {
    return null;
  }

  return (
    <SectionCard className="overflow-hidden p-4 sm:p-5">
      <Carousel
        dir="rtl"
        opts={{
          align: "start",
          containScroll: false,
          direction: "rtl",
          loop: true,
        }}
        className="w-full"
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center justify-end gap-3">

            <div className="flex min-w-0 items-center gap-2">
              <GalleryVerticalEnd className="size-8 p-2 shrink-0 text-muted-foreground bg-muted" />
              <h2 className="truncate text-base font-bold sm:text-lg">محصولات مرتبط</h2>
            </div>
            <Link
              href="/products"
              className="flex items-end gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <span>مشاهده همه</span>
              <ChevronLeft size={12} />
            </Link>
          </div>

          <div className="hidden sm:flex shrink-0 items-center gap-2" dir="ltr">
            <CarouselPrevious className="static size-8 translate-y-0 rounded-sm border-0 bg-muted text-foreground shadow-none hover:bg-muted/80 disabled:bg-muted disabled:text-muted-foreground" />
            <CarouselNext className="static size-8 translate-y-0 rounded-sm border-0 bg-muted text-foreground shadow-none hover:bg-muted/80 disabled:bg-muted disabled:text-muted-foreground" />
          </div>
        </div>

        <CarouselContent className="-ml-3">
          {products.map((item, index) => {
            const imageSrc = item.image ?? fallbackImages[index % fallbackImages.length];

            return (
              <CarouselItem
                key={item.id}
                className="basis-[72%] pl-3 sm:basis-[42%] md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
              >
                <article className="flex h-full min-h-[285px] flex-col rounded-xl border border-border bg-white p-3">
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
                  <p className="mt-auto pt-3 text-sm font-bold">
                    از {formatPrice(item.price)} تومان
                  </p>
                </article>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* <Link
          href="/products"
          className="mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary sm:hidden"
        >
          <span>مشاهده همه</span>
          <ChevronLeft size={10} />
        </Link> */}
      </Carousel>
    </SectionCard>
  );
}
