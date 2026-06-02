"use client";

interface ProductBagProps {
  label: string;
  compact?: boolean;
}

export function ProductBag({ label, compact = false }: ProductBagProps) {
  return (
    <div
      className={`relative mx-auto grid place-items-center rounded-[18px] bg-gradient-to-b from-[#f4d49a] to-[#b98248] text-center shadow-sm ${
        compact ? "h-28 w-20" : "h-52 w-36"
      }`}
      aria-label={label}
    >
      <div className="absolute right-0 top-0 h-full w-3 rounded-r-[18px] bg-[#ef6c31]" />
      <div className="px-3 text-[11px] font-bold leading-5 text-[#3d2a1d]">
        <span className="block">سیمان</span>
        <span className="block">{label}</span>
        <span className="mt-2 block text-[10px]">۵۰ kg</span>
      </div>
    </div>
  );
}
