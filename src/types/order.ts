import type { ItemType } from "./item";

export type Order = {
  id: string;
  // status:boolean;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: {
    pizzaId: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
};

export type OrderItemType = {
  item: ItemType;
  isLoadingIngredients: boolean;
  ingredients: string[];
}
