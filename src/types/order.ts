import type { CartItemType } from "./cart";
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

export type OrderType = {
  id: string;
  status: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: {
    pizzaId: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
};

export type OrderItemType = {
  item: ItemType;
  isLoadingIngredients: boolean;
  ingredients: string[];
};


export type newOrderType = {
  customer: string;
  phone:string;
  address:string;
  cart: CartItemType[];
  priority?: boolean;
}