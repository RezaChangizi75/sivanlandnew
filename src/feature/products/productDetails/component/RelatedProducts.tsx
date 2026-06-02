"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {ChevronLeft, ChevronRight, GalleryVerticalEnd } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductRelatedItem } from "@/feature/products/productDetails/types/productDetailsType.ts/types";
import { SectionCard } from "./SectionCard";

interface RelatedProductsProps {
  products: ProductRelatedItem[];
}

const formatPrice = (value: number) => value.toLocaleString("fa-IR");

export function RelatedProducts({ products }: RelatedProductsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);

  const updateTrackDimensions = () => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const max = Math.min(0, container.clientWidth - track.scrollWidth);
    setMaxOffset(max);
    setOffset((current) => Math.max(Math.min(current, 0), max));
  };

  useEffect(() => {
    updateTrackDimensions();
    window.addEventListener("resize", updateTrackDimensions);

    return () => {
      window.removeEventListener("resize", updateTrackDimensions);
    };
  }, [products]);

  const scrollPrev = () => {
    const container = containerRef.current;
    if (!container) return;

    setOffset((current) => Math.min(current + container.clientWidth, 0));
  };

  const scrollNext = () => {
    const container = containerRef.current;
    if (!container) return;

    setOffset((current) => Math.max(current - container.clientWidth, maxOffset));
  };

  return (
    <SectionCard className="p-4">
      <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center justify-center gap-2">
          <GalleryVerticalEnd className="size-5 text-muted-foreground" />
          <h2 className="text-lg font-bold">محصولات مرتبط</h2>
        <Link
          href="/products"
          className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <span>مشاهده همه</span>
          <ChevronLeft size={10} />
        </Link>
        </div>

        <div className="flex items-center gap-2 self-start">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={offset >= 0}
            className="rounded-full border-border bg-white p-0 text-muted-foreground"
            aria-label="قبلی"
          >
            <ChevronRight size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={offset <= maxOffset}
            className="rounded-full border-border bg-white p-0 text-muted-foreground"
            aria-label="بعدی"
          >
            <ChevronLeft size={18} />
          </Button>
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden pb-2">
        <div
          ref={trackRef}
          className="flex gap-3 transition-transform duration-300"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {products.map((item, index) => {
            const imageSrc = item.image ?? ["/1.png", "/2.png", "/3.png"][index % 3];

            return (
              <article
                key={item.id}
                className="min-w-[48%] sm:min-w-[32%] lg:min-w-[23%] xl:min-w-[20%] rounded-xl border border-border bg-white p-3"
              >
                <div className="relative mb-3 h-32 overflow-hidden rounded-lg bg-white">
                  <Image
                    src={imageSrc}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                  {item.badge ? (
                    <span className="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-[10px] text-white">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="line-clamp-2 min-h-10 text-sm font-semibold leading-5">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.supplier}</p>
                <p className="mt-3 text-sm font-bold">از {formatPrice(item.price)} تومان</p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionCard>
  );
}
