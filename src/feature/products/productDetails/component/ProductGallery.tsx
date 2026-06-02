"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";
import Image from "next/image";

interface ProductGalleryProps {
  product: ProductDetails;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  // fetchedImages holds images loaded from backend (async)
  const [fetchedImages, setFetchedImages] = useState<string[] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);

  const defaultImages = ["/1.png", "/2.png", "/3.png"];

  function normalizeSrc(src: string) {
    if (src.startsWith("/") || src.startsWith("http")) return src;
    const hasImageExtension = /\.(png|jpe?g|webp|gif|svg)$/i.test(src);
    return hasImageExtension ? `/${src}` : src;
  }

  const resolvedGallery = (fetchedImages ?? product.gallery ?? []).map(normalizeSrc);
  const images = resolvedGallery.length ? resolvedGallery : defaultImages;

  useEffect(() => {
    // Attempt to fetch gallery from backend when available.
    // Backend should return JSON: { images: string[] }
    let mounted = true;

    async function fetchGallery() {
      try {
        const res = await fetch(`/api/products/${product.id}/gallery`);
        if (!res.ok) return;
        const json = await res.json();
        if (mounted && Array.isArray(json?.images) && json.images.length) {
          setFetchedImages(json.images);
          // reset activeIndex after async fetch to avoid sync setState in effect
          setActiveIndex(0);
        }
      } catch (e) {
        // ignore fetch errors — keep fallback images
      }
    }

    fetchGallery();

    return () => {
      mounted = false;
    };
  }, [product.id]);

  // reset active index when product changes (do asynchronously)
  useEffect(() => {
    const t = setTimeout(() => setActiveIndex(0), 0);
    return () => clearTimeout(t);
  }, [product.id]);

  function handleSelect(index: number) {
    setActiveIndex(index);
    emblaApi?.scrollTo(index);
  }

  return (
    <div className="space-y-3">
      <div className="relative min-h-[260px] rounded-2xl border border-border bg-white p-4">
        <span className="absolute left-0 top-0 rounded-tl-lg bg-red-600 px-4 py-2 text-sm font-bold text-white">
          عمده
        </span>

        <Carousel
        opts={{
          align: "start",
          loop: true,
          containScroll: false,
          direction: "rtl",
        }}
        setApi={(api) => setEmblaApi(api)} className="h-[260px]">
          <CarouselPrevious size="icon" variant="ghost" className="left-1 z-20 bg-white/70 hover:bg-white" />
          <CarouselContent className="h-[220px]">
            {images.map((src, i) => (
              <CarouselItem key={src + i} className="flex items-center justify-center">
                <div className="relative h-full w-full rounded-xl overflow-hidden">
                  <Image
                    src={src}
                    alt={product.title + " image " + (i + 1)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    onClick={() => handleSelect(i)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext size="icon" variant="ghost" className="right-1 z-20 bg-white/70 hover:bg-white" />
        </Carousel>

        <div className="absolute bottom-4 left-5 text-lg font-black text-primary">زیما</div>
      </div>
    </div>
  );
}
