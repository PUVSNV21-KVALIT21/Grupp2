export interface Item {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  qty: number;
}

export interface ShoppingCart {
  shoppingCart: [];
}
