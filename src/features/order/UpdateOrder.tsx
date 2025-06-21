import { useFetcher } from "react-router-dom";
import type { OrderType } from "../../types/order";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }: { order: OrderType }) {
  // fetcher.Form will not navigate away from the page, but rather submit the form, and revalidate the pGE
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({request, params}) {
  // to get the order id, just use the params.
  const data = {priority: true}
  await updateOrder(params.orderId, data)
  console.log("update");
  return null;
}
