export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

export interface CartItem {
  productId: number;
  quantity: number;
  product: Product;
}
