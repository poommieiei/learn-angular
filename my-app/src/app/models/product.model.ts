export interface Product {
  _id: { $oid: string };
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
  tags: string[];
}

export interface CreateProduct {
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
  tags: string[];
}
