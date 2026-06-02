"use client";

import { GalleryVerticalEnd, Phone, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ProductSupplier } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

import { SectionCard } from "./SectionCard";

interface SupplierTableProps {
  title: string;
  suppliers: ProductSupplier[];
  compactActions?: boolean;
}

const formatPrice = (value: number) => value.toLocaleString("fa-IR");

export function SupplierTable({
  title,
  suppliers,
  compactActions = false,
}: SupplierTableProps) {
  return (
    <SectionCard className="overflow-hidden p-3 sm:p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <GalleryVerticalEnd className="size-5 shrink-0 text-muted-foreground" />
          <h2 className="truncate text-base font-bold sm:text-lg">{title}</h2>
        </div>
        <span className="text-xs text-muted-foreground">مشاهده همه</span>
      </div>

      <div className="space-y-3 md:hidden">
        {suppliers.map((supplier) => (
          <article key={supplier.id} className="rounded-xl bg-muted p-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold">{supplier.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  تحویل {supplier.deliveryTime} | موجودی {supplier.stock}
                </p>
              </div>
              {compactActions ? (
                <Button size="icon-sm" variant="outline" aria-label="تماس با تامین کننده">
                  <Phone className="size-4" />
                </Button>
              ) : (
                <Button size="sm" className="shrink-0">
                  <ShoppingCart className="size-4" />
                  سفارش
                </Button>
              )}
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-sm">
              <span className="text-muted-foreground">قیمت</span>
              <strong>{formatPrice(supplier.price)} تومان</strong>
            </div>
          </article>
        ))}
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[640px] border-separate border-spacing-y-2 text-sm">
          <thead>
            <tr className="bg-[#202027] text-white">
              <th className="rounded-r-lg px-4 py-3 text-right font-medium">تامین کننده</th>
              <th className="px-4 py-3 text-right font-medium">تحویل</th>
              <th className="px-4 py-3 text-right font-medium">موجودی</th>
              <th className="px-4 py-3 text-right font-medium">قیمت (تومان)</th>
              <th className="rounded-l-lg px-4 py-3 text-right font-medium">اقدام</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="bg-muted">
                <td className="rounded-r-lg px-4 py-3 font-semibold">{supplier.name}</td>
                <td className="px-4 py-3">{supplier.deliveryTime}</td>
                <td className="px-4 py-3">{supplier.stock}</td>
                <td className="px-4 py-3">{formatPrice(supplier.price)}</td>
                <td className="rounded-l-lg px-4 py-3">
                  {compactActions ? (
                    <Button size="icon-sm" variant="outline" aria-label="تماس با تامین کننده">
                      <Phone className="size-4" />
                    </Button>
                  ) : (
                    <Button className="h-8 bg-primary px-3 text-xs">
                      <ShoppingCart className="size-4" />
                      سفارش
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}
