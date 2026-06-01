import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Props {
  price: number;
  unit: string;
}

export function ProductPriceCard({
  price,
  unit,
}: Props) {
  return (
    <div className="sticky top-24">
      <div className="rounded-2xl border bg-card p-5">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">
              قیمت هر {unit}
            </p>

            <h2 className="text-3xl font-bold">
              {price.toLocaleString()}
            </h2>

            <span className="text-muted-foreground">
              تومان
            </span>
          </div>

          <Button className="w-full">
            افزودن به سبد خرید
          </Button>

          <Button
            variant="outline"
            className="w-full"
          >
            دریافت مشاوره
          </Button>

          <Button
            variant="ghost"
            className="w-full"
          >
            <Phone className="size-4" />
            تماس با کارشناس
          </Button>
        </div>
      </div>
    </div>
  );
}