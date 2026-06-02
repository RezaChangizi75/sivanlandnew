"use client";

import {
  ChevronLeft,
  ChevronDown,
  GalleryVerticalEnd,
  Headphones,
  Phone,
  ShoppingCart,
  Store,
  UserRound,
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { useGetProductDetailsQuery } from "@/store/productsApi";

import {
  ProductDetails,
  ProductRelatedItem,
  ProductSupplier,
} from "../../types/productDetailsType.ts/types";

interface ProductHeroSectionProps {
  productId: string;
}

const formatPrice = (value: number) => value.toLocaleString("fa-IR");

function SectionCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-2xl border border-border bg-card shadow-sm ${className}`}>
      {children}
    </section>
  );
}

function ProductBag({ label, compact = false }: { label: string; compact?: boolean }) {
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

function ProductGallery({ product }: { product: ProductDetails }) {
  const [active, setActive] = useState(product.gallery[0]);

  return (
    <div className="space-y-3">
      <div className="relative min-h-[260px] rounded-2xl border border-border bg-white p-4">
        <span className="absolute right-4 top-4 rounded-br-lg bg-red-600 px-4 py-2 text-sm font-bold text-white">
          عمده
        </span>
        <button
          className="absolute left-4 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-foreground hover:bg-muted"
          aria-label="تصویر بعدی"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          className="absolute right-4 top-1/2 grid size-8 -translate-y-1/2 rotate-180 place-items-center rounded-full text-foreground hover:bg-muted"
          aria-label="تصویر قبلی"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex h-[220px] items-center justify-center pt-6">
          <ProductBag label={active} />
        </div>
        <div className="absolute bottom-4 left-5 text-lg font-black text-primary">نیما</div>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {product.gallery.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`grid min-w-20 place-items-center rounded-xl border bg-white p-2 text-xs transition ${
              active === item ? "border-primary text-primary" : "border-border text-muted-foreground"
            }`}
          >
            <ProductBag label={item} compact />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductSummary({ product }: { product: ProductDetails }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">تاریخ بروزرسانی: {product.updatedAt}</p>
        <h1 className="text-xl font-bold leading-9 text-card-foreground md:text-2xl">
          {product.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          تعداد تامین کننده: {product.supplierCount} تامین کننده
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {product.metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl bg-muted px-3 py-3 text-center">
            <p className="text-xs text-muted-foreground">{metric.label}</p>
            <p className="mt-1 text-sm font-semibold text-card-foreground">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductTabs({ product }: { product: ProductDetails }) {
  const [tab, setTab] = useState<"review" | "specs">("review");

  return (
    <div>
      <div className="flex border-b border-border">
        <button
          onClick={() => setTab("review")}
          className={`h-11 rounded-t-xl px-5 text-sm font-semibold ${
            tab === "review" ? "bg-[#202027] text-white" : "bg-muted text-foreground"
          }`}
        >
          نقد و بررسی
        </button>
        <button
          onClick={() => setTab("specs")}
          className={`h-11 rounded-t-xl px-5 text-sm font-semibold ${
            tab === "specs" ? "bg-[#202027] text-white" : "bg-muted text-foreground"
          }`}
        >
          مشخصات محصول
        </button>
      </div>

      {tab === "review" ? (
        <div className="space-y-6 px-1 py-6 text-sm leading-8 text-muted-foreground md:px-3">
          {product.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <dl className="grid gap-x-8 gap-y-5 px-1 py-6 md:grid-cols-2 md:px-3">
          {product.specs.map((spec) => (
            <div key={spec.label} className="grid grid-cols-2 gap-3 border-b border-border/70 pb-3">
              <dt className="text-sm text-muted-foreground">{spec.label}</dt>
              <dd className="text-sm font-semibold text-card-foreground">{spec.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

function StoreDetails({ product }: { product: ProductDetails }) {
  const rows = [
    ["موجودی کالا", product.store.stock],
    ["زمان تحویل", product.store.deliveryTime],
    ["نحوه ارسال", product.store.deliveryMethod],
  ];

  return (
    <SectionCard className="p-4">
      <div className="rounded-xl bg-muted p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-primary">مشاهده و فروشگاه دیگر</p>
            <h2 className="mt-3 text-lg font-bold">{product.store.name}</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {product.store.responseRate} | تعداد فروش موفق {product.store.salesCount}
            </p>
          </div>
          <div className="grid size-16 place-items-center rounded-full border bg-white text-primary">
            <Store className="size-9" />
          </div>
        </div>
      </div>

      <div className="my-5 space-y-3">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between border-b border-border pb-2 text-sm">
            <span className="text-muted-foreground">{label}:</span>
            <span className="font-semibold">{value}</span>
          </div>
        ))}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">شروع قیمت از:</span>
          <strong className="text-xl">{formatPrice(product.store.priceFrom)} تومان</strong>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto] gap-2">
        <Button className="h-11">افزودن به سبد خرید</Button>
        <Button variant="outline" className="h-11 min-w-36">
          سایر تامین کنندگان
          <ChevronDown className="size-4" />
        </Button>
      </div>
    </SectionCard>
  );
}

function ExpertCard({ product }: { product: ProductDetails }) {
  return (
    <SectionCard className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">کارشناسان ما</h2>
        <span className="text-xs text-primary">مشاهده همه</span>
      </div>
      <div className="flex items-center gap-3 rounded-xl bg-muted p-4">
        <div className="grid size-16 place-items-center rounded-full bg-[#54c865] text-white">
          <UserRound className="size-8" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold">{product.expert.name}</h3>
          <p className="text-xs text-muted-foreground">{product.expert.role}</p>
          <a
            href={`tel:${product.expert.phone.replace(/\s/g, "")}`}
            className="mt-3 inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-secondary px-3 text-sm font-bold text-secondary-foreground"
          >
            <Phone className="size-4" />
            {product.expert.extension} | {product.expert.phone}
          </a>
        </div>
      </div>
    </SectionCard>
  );
}

function SupplierTable({
  title,
  suppliers,
  compactActions = false,
}: {
  title: string;
  suppliers: ProductSupplier[];
  compactActions?: boolean;
}) {
  return (
    <SectionCard className="overflow-hidden p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GalleryVerticalEnd className="size-5 text-muted-foreground" />
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <span className="text-xs text-muted-foreground">مشاهده همه</span>
      </div>
      <div className="overflow-x-auto">
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

function RelatedProducts({ products }: { products: ProductRelatedItem[] }) {
  return (
    <SectionCard className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GalleryVerticalEnd className="size-5 text-muted-foreground" />
          <h2 className="text-lg font-bold">محصولات مرتبط</h2>
        </div>
        <span className="text-xs text-muted-foreground">مشاهده همه</span>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {products.map((item) => (
          <article key={item.id} className="rounded-xl border border-border bg-white p-3">
            <div className="relative mb-3 grid h-32 place-items-center rounded-lg bg-muted">
              {item.badge ? (
                <span className="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-[10px] text-white">
                  {item.badge}
                </span>
              ) : null}
              <ProductBag label={item.title} compact />
            </div>
            <h3 className="line-clamp-2 min-h-10 text-sm font-semibold leading-5">{item.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{item.supplier}</p>
            <p className="mt-3 text-sm font-bold">از {formatPrice(item.price)} تومان</p>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}

function PromoBanners() {
  return (
    <SectionCard className="p-4">
      <div className="grid gap-3 md:grid-cols-3">
        {["قیمت مناسب بازار سیمان", "عرضه سیمان های فله", "هر نوع سیمانی که بخوای اینجا"].map(
          (title) => (
            <div
              key={title}
              className="flex min-h-28 items-center justify-between overflow-hidden rounded-xl bg-gradient-to-l from-[#75a91d] to-[#28500d] p-4 text-white"
            >
              <h3 className="max-w-40 text-xl font-black leading-8">{title}</h3>
              <div className="size-16 rounded-xl bg-white/20" />
            </div>
          )
        )}
      </div>
    </SectionCard>
  );
}

function ContactBanner() {
  return (
    <section className="overflow-hidden rounded-[28px] bg-gradient-to-l from-[#a5da65] via-[#38780d] to-[#173b06] p-6 text-white shadow-sm md:p-10">
      <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-center">
        <div>
          <h2 className="text-2xl font-black">تماس کارشناسان ما با شما</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/85">
            شماره تماس خود را وارد کنید تا کارشناسان فروش در سریع ترین زمان برای راهنمایی خرید با شما تماس بگیرند.
          </p>
          <div className="mt-5 grid max-w-xl gap-3 md:grid-cols-2">
            <input className="h-10 rounded-lg border-0 bg-white px-3 text-sm text-foreground outline-none" placeholder="شماره موبایل" />
            <input className="h-10 rounded-lg border-0 bg-white px-3 text-sm text-foreground outline-none" placeholder="نام و نام خانوادگی" />
          </div>
          <Button className="mt-3 h-10 w-full max-w-xl bg-secondary text-secondary-foreground hover:bg-secondary/90">
            درخواست مشاوره
          </Button>
        </div>
        <div className="hidden rounded-2xl bg-white/15 p-5 md:block">
          <Headphones className="mx-auto size-24" />
        </div>
      </div>
    </section>
  );
}

function Faq({ product }: { product: ProductDetails }) {
  const [open, setOpen] = useState(0);

  return (
    <SectionCard className="p-5 md:p-8">
      <h2 className="mb-6 text-center text-xl font-black">سوالات متداول</h2>
      <div className="mx-auto max-w-3xl space-y-3">
        {product.faq.map((item, index) => (
          <div key={item.question} className="rounded-xl bg-muted">
            <button
              onClick={() => setOpen(index)}
              className="flex w-full items-center justify-between px-4 py-3 text-right text-sm font-semibold"
            >
              {item.question}
              <ChevronLeft className={`size-4 transition ${open === index ? "-rotate-90" : ""}`} />
            </button>
            {open === index ? (
              <p className="px-4 pb-4 text-sm leading-7 text-muted-foreground">{item.answer}</p>
            ) : null}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function Footer() {
  return (
    <footer className="mt-10 bg-white py-10">
      <div className="container-page grid gap-8 text-sm text-muted-foreground md:grid-cols-4">
        <div>
          <h3 className="mb-3 font-bold text-foreground">سیوان لند</h3>
          <p className="leading-7">
            مرجع تامین مصالح ساختمانی، مقایسه تامین کنندگان و خرید مطمئن برای پروژه های ساختمانی.
          </p>
        </div>
        {["دسترسی سریع", "درباره خدمات ما", "پشتیبانی"].map((title) => (
          <div key={title}>
            <h3 className="mb-3 font-bold text-foreground">{title}</h3>
            <ul className="space-y-2">
              <li>خدمات</li>
              <li>مجله</li>
              <li>تماس با ما</li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

function ProductDetailsSkeleton() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-page py-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
          <div className="h-[520px] animate-pulse rounded-2xl bg-card" />
          <div className="h-[360px] animate-pulse rounded-2xl bg-card" />
        </div>
      </div>
    </main>
  );
}

export function ProductHeroSection({ productId }: ProductHeroSectionProps) {
  const { data: product, isLoading } = useGetProductDetailsQuery(productId);
  const breadcrumb = useMemo(() => product?.categoryTrail.join("، "), [product]);

  if (isLoading || !product) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container-page space-y-5 py-5 md:py-8">
        <p className="hidden text-sm text-muted-foreground md:block">{breadcrumb}</p>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div className="space-y-5 lg:order-1">
            <SectionCard className="p-4 md:p-6">
              <div className="grid gap-6 xl:grid-cols-[330px_minmax(0,1fr)]">
                <ProductGallery product={product} />
                <ProductSummary product={product} />
              </div>
              <div className="mt-6">
                <ProductTabs product={product} />
              </div>
            </SectionCard>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-6 lg:order-2">
            <StoreDetails product={product} />
            <ExpertCard product={product} />
          </aside>
        </div>

        <SupplierTable title="تامین کنندگان دیگر" suppliers={product.suppliers} compactActions />
        <RelatedProducts products={product.relatedProducts} />
        <SupplierTable title="محصولات مرتبط" suppliers={product.supportSuppliers} />
        <PromoBanners />
        <ContactBanner />
        <Faq product={product} />
      </div>
      <Footer />
    </main>
  );
}
