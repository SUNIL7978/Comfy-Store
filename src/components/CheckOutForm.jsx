import { Form, redirect } from "react-router-dom";
import Forminput from "./Forminput";
import SubmitBtn from "./SubmitBtn";
import { fetchProduct, formatPrice } from "../utils";
import { clearCart } from "../Features/Cart/cartSlice";
import { toast } from "react-toastify";

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { address, name } = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      address,
      name,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await fetchProduct.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      queryClient.removeQueries(["orders"]);
      console.log(response);
      store.dispatch(clearCart());
      toast.success("Place order Successfully");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const newError =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(newError);
      if (error?.response?.status === 401) return redirect("/login");
      return null;
    }
  };

const CheckOutForm = () => {
  return (
    <Form method='post' className='flex flex-col gap-y-4'>
      <h4 className='font-bold text-xl capitalize'>Shipping Information</h4>
      <Forminput label='First Name' name='name' type='text' />
      <Forminput label='Address' type='text' name='address' />
      <div className='mt-4'>
        <SubmitBtn text='place Your Order' />
      </div>
    </Form>
  );
};
export default CheckOutForm;
