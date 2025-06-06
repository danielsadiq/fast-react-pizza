import type { CartItemProps } from "../../types/item";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
function CartItem({ item }: CartItemProps) {
  // const { pizzaId, name, quantity, totalPrice } = item;
  const { name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex items-center justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex sm:gap-6 items-center">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
