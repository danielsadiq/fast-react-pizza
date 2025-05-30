export type PizzaType = {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};

export type MenuItemProps = {
  pizza: PizzaType;
};
