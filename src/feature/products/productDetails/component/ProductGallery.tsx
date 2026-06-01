"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  images?: string[];
}

export function ProductGallery({ images = [] }: Props) {
  const [active, setActive] = useState(images[0] ?? "");

  if (!images.length) return null;

  return (
    <div className="space-y-4">
      <div className="border rounded-2xl bg-card p-4">
        <div className="relative aspect-square">
          <Image
            fill
            alt="product"
            src={active}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex gap-3">
        {images?.map((image) => (
          <button
            key={image}
            onClick={() => setActive(image)}
            className={`
              relative h-20 w-20 rounded-xl border overflow-hidden
              ${active === image ? "border-primary" : ""}
            `}
          >
            <Image
              fill
              alt=""
              src={image}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}