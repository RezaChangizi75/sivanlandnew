"use client";

import { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export function SectionCard({ children, className = "" }: SectionCardProps) {
  return (
    <Card className={cn(className)}>
      {children}
    </Card>
  );
}
