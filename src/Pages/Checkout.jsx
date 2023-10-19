import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import SectionTitle from "../components/SectionTitle";
import { CartTotal, CheckOutForm } from "../components";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You Must be Logged into the Checkout Page");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text='Your cart is Empty' />;
  }
  return (
    <>
      <SectionTitle text='Place Your Order' />
      <div className='mt-2 grid gap-8 md:grid-cols-2 items-center'>
        <CheckOutForm />
        <CartTotal />
      </div>
    </>
  );
};
export default Checkout;
