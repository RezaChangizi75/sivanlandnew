"use client";

import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";
import { Input } from "@/components/ui/input";

export function ContactBanner() {
  return (
    <section className="overflow-hidden rounded-[28px] bg-gradient-to-l from-[#a5da65] via-[#38780d] to-[#173b06] p-6 text-white shadow-sm md:p-10">
      <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-center">
        <div>
          <h2 className="text-2xl font-black">تماس کارشناسان ما با شما</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/85">
            شماره تماس خود را وارد کنید تا کارشناسان فروش در سریع ترین زمان برای راهنمایی خرید با شما تماس بگیرند.
          </p>
          <div className="mt-5 grid max-w-xl gap-3 md:grid-cols-2">
            <Input className="bg-white text-foreground" placeholder="شماره موبایل" />
            <Input className="bg-white text-foreground" placeholder="نام و نام خانوادگی" />
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
