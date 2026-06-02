"use client";

import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { SectionCard } from "./SectionCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

type CarouselApi = UseEmblaCarouselType[1];

interface ProductExpertCardProps {
  product: ProductDetails;
}

export function ProductExpertCard({ product }: ProductExpertCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselApiRef = useRef<CarouselApi>(null);

  const handleCarouselInit = (api: CarouselApi) => {
    if (!api) return;
    carouselApiRef.current = api;
    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  };

  const experts = product.experts && product.experts.length > 0 
    ? product.experts 
    : [product.expert];

  const handlePrev = () => {
    carouselApiRef.current?.scrollNext();
  };

  const handleNext = () => {
    carouselApiRef.current?.scrollPrev();
  };

  return (
    <SectionCard className="p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold">کارشناسان ما</h2>
          <span className="text-xs text-primary cursor-pointer hover:underline">مشاهده همه</span>
        </div>
        <div className="flex items-center gap-2">
          {experts.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background hover:bg-muted transition-colors"
                aria-label="Previous expert"
              >
                <ChevronRight className="size-4" />
              </button>
              <button
                onClick={handleNext}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background hover:bg-muted transition-colors"
                aria-label="Next expert"
              >
                <ChevronLeft className="size-4" />
              </button>
            </>
          )}
        </div>
      </div>

      <Carousel 
        setApi={handleCarouselInit} 
        className="w-full"
        opts={{
          align: "start",
          loop: true,
          containScroll: false,
          direction: "rtl",
        }}
      >
        <CarouselContent className="ml-4">
          {experts.map((expert) => (
            <CarouselItem key={expert.id} className="basis-full">
              <div className="flex flex-col gap-3 rounded-xl bg-muted p-4">
                <div className="flex items-center gap-3">
                  <div className="grid size-16 shrink-0 place-items-center rounded-full border border-emerald-700 bg-[#54c865] text-white">
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold">{expert.name}</h3>
                    <p className="text-xs text-muted-foreground">{expert.role}</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-secondary px-3 text-sm font-bold text-white"
                >
                  <a href={`tel:${expert.phone.replace(/\s/g, "")}`}>
                    <Phone className="size-4" />
                    {expert.extension} | {expert.phone}
                  </a>
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </SectionCard>
  );
}
