export interface ShoppingCart {
  shoppingCart: [];
}

export interface Category {
  id: string;
  name: string;
  imageLink: string;
}
export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  category: Category;
  discount: null;
  isNewsProduct: boolean;
}
export interface CartItem extends Item {
  qty: number;
  totalPrice: number;
}

export interface SearchParam {
  sort: string;
  ascending: boolean;
}
