"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionCard } from "./SectionCard";
import type { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

interface FaqProps {
  product: ProductDetails;
}

export function Faq({ product }: FaqProps) {
  return (
    <SectionCard className="p-5 md:p-8">
      <h2 className="mb-6 text-center text-xl font-black">سوالات متداول</h2>
      <Accordion type="single" defaultValue="0" collapsible className="mx-auto max-w-3xl">
        {product.faq.map((item, index) => (
          <AccordionItem value={String(index)} key={item.question}>
            <AccordionTrigger className="w-full text-right">{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionCard>
  );
}
