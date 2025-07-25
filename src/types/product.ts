export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  unit: string;
  inStock: boolean;
  featured?: boolean;
  organic?: boolean;
}

export type ProductCategory = 'vegetables' | 'fruits' | 'herbs' | 'dairy' | 'all';