"use client";

import { ChevronLeft, GalleryVerticalEnd } from "lucide-react";
import { SectionCard } from "./SectionCard";
import Link from "next/link";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const banners = [
  "قیمت مناسب بازار سیمان",
  "عرضه سیمان های فله",
  "هر نوع سیمانی که بخوای اینجا",
];

export function PromoBanners() {
  return (
    <SectionCard className="p-5 sm:p-4">
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
            {/* <CarouselPrevious className="static size-8 translate-y-0 rounded-sm border-0 bg-muted text-foreground shadow-none hover:bg-muted/80 disabled:bg-muted disabled:text-muted-foreground" />
            <CarouselNext className="static size-8 translate-y-0 rounded-sm border-0 bg-muted text-foreground shadow-none hover:bg-muted/80 disabled:bg-muted disabled:text-muted-foreground" /> */}
          </div>
        </div>
      <div className="-mx-3 overflow-x-auto no-scrollbar px-3 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
        <div className="flex snap-x snap-mandatory gap-3 md:grid md:grid-cols-3">
          {banners.map((title) => (
            <div
              key={title}
              className="flex min-h-24 w-[78%] min-w-[230px] shrink-0 snap-start items-center justify-between overflow-hidden rounded-xl bg-gradient-to-r from-[#75a91d] to-[#28500d] p-4 text-white md:w-auto md:min-w-0"
            >
              <h3 className="max-w-40 text-xl font-black leading-7 sm:text-2xl sm:leading-10">
                {title}
              </h3>
              <div className="size-14 shrink-0 rounded-xl bg-white/20 sm:size-16" />
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
