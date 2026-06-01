import { ProductSpec } from "../types/productDetailsType.ts/types";

interface ProductSpecsProps {
  specs: ProductSpec[];
}

export function ProductSpecs({
  specs,
}: ProductSpecsProps) {
  return (
    <div>
      {specs.map((spec) => (
        <div key={spec.label}>
          {spec.label}
          {spec.value}
        </div>
      ))}
    </div>
  );
}