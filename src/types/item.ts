export type ItemType = {
  pizzaId: number,
  name: string,
  quantity: number,
  totalPrice: number,
}

export type CartItemProps = {
  item:ItemType
}