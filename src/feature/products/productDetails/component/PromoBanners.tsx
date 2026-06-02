"use client";

import { SectionCard } from "./SectionCard";

export function PromoBanners() {
  return (
    <SectionCard className="p-4">
      <div className="grid gap-3 md:grid-cols-3">
        {[
          "قیمت مناسب بازار سیمان",
          "عرضه سیمان های فله",
          "هر نوع سیمانی که بخوای اینجا",
        ].map((title) => (
          <div
            key={title}
            className="flex min-h-28 items-center justify-between overflow-hidden rounded-xl bg-gradient-to-l from-[#75a91d] to-[#28500d] p-4 text-white"
          >
            <h3 className="max-w-40 text-xl font-black leading-8">{title}</h3>
            <div className="size-16 rounded-xl bg-white/20" />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
