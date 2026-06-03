"use client";

import { ChevronLeftIcon, GalleryVerticalEnd, Phone, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
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
      </div>

      {/* <div className="space-y-3 md:hidden">
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
      </div> */}

      <div className="overflow-x-auto no-scrollbar">
        <Table className="min-w-[240px] text-sm">
          <TableHeader>
            <TableRow className="bg-[#202027] text-white  hover:bg-[#202027]">
              <TableHead className="w-[90px] md:w-auto rounded-r-lg px-1 py-3 sm:px-1 md:px-4 md:py-3 text-right font-medium text-inherit">تامین کننده</TableHead>
              <TableHead className="w-[90px] md:w-auto px-0 py-3 sm:px-1 md:px-4 md:py-3 text-right font-medium text-inherit">تحویل</TableHead>
              <TableHead className="w-[90px] md:w-auto px-0 py-3 sm:px-1 md:px-4 md:py-3 text-right font-medium text-inherit">موجودی</TableHead>
              <TableHead className="w-[90px] md:w-auto px-0 py-3 sm:px-1 md:px-4 md:py-3 text-right font-medium text-inherit">قیمت <span className="text-muted-foreground">تومان</span></TableHead>
              <TableHead className="rounded-l-lg px-1 py-3 sm:px-1 md:px-4 md:py-3 text-right font-medium text-inherit"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
                {suppliers.map((supplier, index) => (
                  <TableRow
                    key={supplier.id}
                    className={`border-b-0 ${index % 2 === 0 ? "bg-white" : "bg-muted"}`}
                  >
                              <TableCell className="rounded-r-lg  px-1 py-3 sm:px-1 md:px-4 md:py-3 font-semibold"><span className="block w-[80px] truncate md:w-auto">
                  {supplier.name}
                </span></TableCell>
                <TableCell className="px-0 py-3 sm:px-1 md:px-4 md:py-3">{supplier.deliveryTime}</TableCell>
                <TableCell className="px-0 py-3 sm:px-1 md:px-4 md:py-3">{supplier.stock}</TableCell>
                <TableCell className="px-0 py-3 sm:px-1 md:px-4 md:py-3">{formatPrice(supplier.price)} <span className="text-muted-foreground">تومان</span></TableCell>
                <TableCell className="rounded-l-lg px-1 py-3 sm:px-1 md:px-4 md:py-3">
                  {compactActions ? (

                   <div className="w-full flex justify-end">
                        
                        <Button
                          size="icon"
                          className="md:hidden h-8 w-8 bg-white text-black hover:bg-white/85"
                        >
                          <ShoppingCart className="size-4" />
                        </Button>

                        
                        <div className="hidden md:flex items-center justify-end gap-2">
                          <Button variant="outline" aria-label="تماس با تامین کننده">
                            <Phone className="size-4" />
                          </Button>

                          <Button className="h-8 bg-white px-4 text-xs text-black hover:bg-white/85">
                            <ShoppingCart className="size-4" />
                            افزودن به سبد خرید
                          </Button>
                        </div>
                      </div>
                  ) : (
                    <div className="w-full flex justify-end">

                        <Button
                          size="icon"
                          className="md:hidden h-8 w-8 bg-primary"
                        >
                         <ChevronLeftIcon />
                        </Button>

                        {/* Desktop */}
                        <div className="hidden md:flex items-center justify-end gap-2">
                          <Button variant="outline" aria-label="تماس با تامین کننده">
                            <Phone className="size-4" />
                          </Button>

                          <Button className="h-8 bg-primary px-4 text-xs">
                            <ShoppingCart className="size-4" />
                            سفارش تلفنی
                          </Button>
                        </div>
                      </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </SectionCard>
  );
}
