"use client";

import { SectionCard } from "./SectionCard";

const banners = [
  "قیمت مناسب بازار سیمان",
  "عرضه سیمان های فله",
  "هر نوع سیمانی که بخوای اینجا",
];

export function PromoBanners() {
  return (
    <SectionCard className="p-5 sm:p-4">
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
