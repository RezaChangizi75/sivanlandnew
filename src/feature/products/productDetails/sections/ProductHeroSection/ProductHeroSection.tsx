import { ProductGallery } from "../../component/ProductGallery";
import { ProductInfo } from "../../component/ProductInfo";
import { ProductPriceCard } from "../../component/ProductPriceCard";
import { ExpertCard } from "../../component/ExpertCard";
import { ProductSpecs } from "../../component/ProductSpecs";
import { Product } from "../../types/productDetailsType.ts/types";

interface Props {
  product: Product;
}

export function ProductHeroSection({
  product,
}: Props) {
  return (
    <section className="container mx-auto py-10">
      <div className="grid gap-6 lg:grid-cols-3">

        <div className="space-y-6 lg:col-span-2">
          <div className="grid gap-6 xl:grid-cols-[350px_1fr]">
            <ProductGallery
              images={product.images}
            />

            <ProductInfo
              title={product.title}
              description={product.description}
            />
          </div>

          <ProductSpecs
            specs={product.specs}
          />
        </div>

        {/* Right column: Price + Expert stacked */}
        <div className="space-y-24 gap-10">
          <ProductPriceCard
            price={product.price}
            unit={product.unit}
          />

          <ExpertCard />
        </div>

      </div>
    </section>
  );
}