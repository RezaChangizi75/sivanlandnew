import { ProductGallery } from "../../component/ProductGallery";
import { ProductInfo } from "../../component/ProductInfo";
import { ProductPriceCard } from "../../component/ProductPriceCard";
import { ProductSpecs } from "../../component/ProductSpecs";
import { Product } from "../../types/productDetailsType.ts/types";

interface Props {
  product: Product;
}

export function ProductHeroSection({
  product,
}: Props) {
  return (
    <section>
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">

        <div className="space-y-6">
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
        {/* Price Card */}
        <ProductPriceCard
          price={product.price}
          unit={product.unit}
        />

        {/* Content */}

      </div>
    </section>
  );
}