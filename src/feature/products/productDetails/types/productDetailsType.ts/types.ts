export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductMetric {
  label: string;
  value: string;
}

export interface ProductSupplier {
  id: string;
  name: string;
  price: number;
  stock: number;
  deliveryTime: string;
  deliveryType: string;
  rating?: number;
}

export interface ProductRelatedItem {
  id: string;
  title: string;
  supplier: string;
  price: number;
  badge?: string;
  image?: string;
}

export interface ProductExpert {
  id: string;
  name: string;
  role: string;
  phone: string;
  extension: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductDetails {
  id: string;
  title: string;
  brand: string;
  categoryTrail: { title: string; href: string }[];
  updatedAt: string;
  supplierCount: number;
  reviewSummary: string;
  price: number;
  unit: string;
  mainImageLabel: string;
  gallery: string[];
  metrics: ProductMetric[];
  specs: ProductSpec[];
  description: string[];
  store: {
    name: string;
    responseRate: string;
    salesCount: number;
    stock: string;
    deliveryTime: string;
    deliveryMethod: string;
    priceFrom: number;
  };
  expert: ProductExpert;
  experts: ProductExpert[];
  suppliers: ProductSupplier[];
  supportSuppliers: ProductSupplier[];
  relatedProducts: ProductRelatedItem[];
  faq: ProductFaq[];
}
