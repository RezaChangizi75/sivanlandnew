export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  unit: string;

  factory: string;
  weight: string;
  type: string;

  description: string;

  images: string[];

  specs: ProductSpec[];
}