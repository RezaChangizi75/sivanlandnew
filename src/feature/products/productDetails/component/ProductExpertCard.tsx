"use client";

import { ChevronLeft, ChevronRight, Phone, UserRound } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import type { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

import { SectionCard } from "./SectionCard";

interface ProductExpertCardProps {
  product: ProductDetails;
}

export function ProductExpertCard({ product }: ProductExpertCardProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const experts = product.experts?.length ? product.experts : [product.expert];

  const scrollByCard = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({
      left: direction * 260,
      behavior: "smooth",
    });
  };

  return (
    <SectionCard className="overflow-hidden p-3 sm:p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-bold sm:text-lg">کارشناسان ما</h2>
          <span className="cursor-pointer text-xs text-primary hover:underline">مشاهده همه</span>
        </div>
        {experts.length > 1 ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollByCard(1)}
              className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-muted"
              aria-label="کارشناس قبلی"
            >
              <ChevronRight className="size-4" />
            </button>
            <button
              onClick={() => scrollByCard(-1)}
              className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-muted"
              aria-label="کارشناس بعدی"
            >
              <ChevronLeft className="size-4" />
            </button>
          </div>
        ) : null}
      </div>

      <div ref={scrollerRef} className="-mx-3 overflow-x-auto px-3 no-scrollbar sm:-mx-4 sm:px-4">
        <div className="flex snap-x snap-mandatory gap-3">
          {experts.map((expert) => (
            <article
              key={expert.id}
              className="snap-start rounded-xl bg-muted p-3 sm:p-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid size-14 shrink-0 place-items-center rounded-full border border-emerald-700 bg-[#54c865] text-white sm:size-16">
                  <UserRound className="size-7 sm:size-8" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-bold">{expert.name}</h3>
                  <p className="truncate text-xs text-muted-foreground">{expert.role}</p>
                </div>
              </div>
              
              <Button
                asChild
                className="mx-auto w-fit mt-3 h-9 align-middle gap-2 rounded-lg bg-secondary px-3 text-sm font-bold text-secondary-foreground hover:bg-secondary/90"
              >
                <a href={`tel:${expert.phone.replace(/\s/g, "")}`}>
                  <Phone className="size-4" />
                  <span className="truncate">
                    {expert.extension} | {expert.phone}
                  </span>
                </a>
              </Button>
              
            </article>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
