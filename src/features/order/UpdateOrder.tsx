/* eslint-disable react-refresh/only-export-components */
import { useFetcher } from "react-router-dom";
import type { OrderType } from "../../types/order";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }: { order: OrderType }) {
  // eslint-disable-next-line no-constant-condition
  if (6>7){
    console.log(order)
  }
  
  // fetcher.Form will not navigate away from the page, but rather submit the form, and revalidate the pGE
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}


interface ActionParams {
  orderId: string;
}

// export async function action({request, params}) {
  export async function action({params}: {params: ActionParams}) {
    // to get the order id, just use the params.
    const data = {priority: true}
    await updateOrder(params.orderId, data)
    console.log("update");
    return null;
  }
  
export default UpdateOrder;