"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {ChevronLeft, ChevronRight, GalleryVerticalEnd } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductRelatedItem } from "@/feature/products/productDetails/types/productDetailsType.ts/types";
import { ProductBag } from "./ProductBag";
import { SectionCard } from "./SectionCard";

interface RelatedProductsProps {
  products: ProductRelatedItem[];
}

const formatPrice = (value: number) => value.toLocaleString("fa-IR");

export function RelatedProducts({ products }: RelatedProductsProps) {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = () => {
    const container = listRef.current;
    if (!container) return;
    setCanScrollPrev(container.scrollLeft > 10);
    setCanScrollNext(container.scrollLeft + container.clientWidth + 10 < container.scrollWidth);
  };

  useEffect(() => {
    updateScrollButtons();

    const container = listRef.current;
    if (!container) return;

    const handleScroll = () => updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    container.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateScrollButtons);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [products]);

  const scroll = (direction: "prev" | "next") => {
    const container = listRef.current;
    if (!container) return;

    const distance = container.clientWidth;
    container.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
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
            onClick={() => scroll("prev")}
            disabled={!canScrollPrev}
            className="rounded-full border-border bg-white p-0 text-muted-foreground"
            aria-label="قبلی"
          >
            <ChevronRight size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("next")}
            disabled={!canScrollNext}
            className="rounded-full border-border bg-white p-0 text-muted-foreground"
            aria-label="بعدی"
          >
            <ChevronLeft size={18} />
          </Button>
        </div>
      </div>

      <div
        ref={listRef}
        className="flex gap-3 overflow-x-auto pb-2 scroll-smooth scrollbar-none"
      >
        {products.map((item) => (
          <article
            key={item.id}
            className="min-w-[48%] sm:min-w-[32%] lg:min-w-[23%] xl:min-w-[20%] rounded-xl border border-border bg-white p-3"
          >
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
