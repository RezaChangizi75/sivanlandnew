"use client";

import { Headphones } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactBanner() {
  return (
    <section className="overflow-hidden rounded-xl  bg-gradient-to-l from-[#a5da65] via-[#38780d] to-[#173b06] p-4 text-white shadow-sm sm:rounded-[28px] sm:p-6 md:p-10">
      <div className="grid min-w-0 gap-6 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)] md:items-center">
        <div className="hidden rounded-2xl bg-white/15 p-5 md:block">
          <Headphones className="mx-auto size-20 lg:size-24" />
        </div>
        <div className="min-w-0">
          <h2 className="text-xl font-black leading-8 sm:text-2xl">
            تماس کارشناسان ما با شما
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/85">
            شماره تماس خود را وارد کنید تا کارشناسان فروش در سریع ترین زمان برای راهنمایی خرید با شما تماس بگیرند.
          </p>
          <div className="mt-5 grid max-w-xl gap-3 sm:grid-cols-2">
            <Input className="h-10 bg-white text-foreground" placeholder="شماره موبایل" />
            <Input className="h-10 bg-white text-foreground" placeholder="نام و نام خانوادگی" />
          </div>
          <Button className="mt-3 h-10 w-full max-w-xl bg-secondary text-secondary-foreground hover:bg-secondary/90">
            درخواست مشاوره
          </Button>
        </div>
      </div>
    </section>
  );
}
