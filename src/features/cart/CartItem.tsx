import type { CartItemProps } from "../../types/item";
import { formatCurrency } from "../../utils/helpers";
function CartItem({ item }: CartItemProps) {
  // const { pizzaId, name, quantity, totalPrice } = item;
  const { name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
