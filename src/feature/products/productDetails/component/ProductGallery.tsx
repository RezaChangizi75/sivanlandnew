"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

interface ProductGalleryProps {
  product: ProductDetails;
}

const defaultImages = ["/1.png", "/2.png", "/3.png"];

function normalizeSrc(src: string) {
  if (src.startsWith("/") || src.startsWith("http")) return src;
  const hasImageExtension = /\.(png|jpe?g|webp|gif|svg)$/i.test(src);
  return hasImageExtension ? `/${src}` : src;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [fetchedImages, setFetchedImages] = useState<string[] | null>(null);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);

  const resolvedGallery = (fetchedImages ?? product.gallery ?? []).map(normalizeSrc);
  const images = resolvedGallery.length ? resolvedGallery : defaultImages;

  // useEffect(() => {
  //   let mounted = true;

  //   async function fetchGallery() {
  //     try {
  //       const res = await fetch(`/api/products/${product.id}/gallery`);
  //       if (!res.ok) return;

  //       const json = await res.json();
  //       if (mounted && Array.isArray(json?.images) && json.images.length) {
  //         setFetchedImages(json.images);
  //       }
  //     } catch {
  //       // Keep local fallback images until the real gallery API is available.
  //     }
  //   }

  //   fetchGallery();

  //   return () => {
  //     mounted = false;
  //   };
  // }, [product.id]);

  return (
    <div className="min-w-0 space-y-3">
      <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-border bg-white p-3 sm:min-h-[260px] sm:p-4">
        <span className="absolute left-0 top-0 rounded-tl-lg bg-red-600 px-4 py-2 text-sm font-bold text-white z-1">
          عمده
        </span>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            containScroll: false,
            direction: "rtl",
          }}
          setApi={(api) => setEmblaApi(api)}
          className="h-[240px] sm:h-[260px]"
        >
          <CarouselPrevious
            size="icon"
            variant="ghost"
            className="left-1 z-20 bg-white/70 hover:bg-white"
          />
          <CarouselContent className="h-[210px] sm:h-[220px]">
            {images.map((src, index) => (
              <CarouselItem key={`${src}-${index}`} className="flex items-center justify-center">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`${product.title} - تصویر ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 330px"
                    className="object-contain"
                    onClick={() => emblaApi?.scrollTo(index)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext
            variant="ghost"
            className="size-8 right-1 z-20 bg-white/70 hover:bg-white"
          />
        </Carousel>

        <div className="absolute bottom-3 right-4 text-base font-black text-primary sm:bottom-4 sm:left-5 sm:text-lg">
          زیما
        </div>
      </div>
    </div>
  );
}
