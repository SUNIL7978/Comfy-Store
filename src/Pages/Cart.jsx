import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import { CartItemList, CartTotal } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useSelector((state) => state.userState);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text='Your Cart Is Empty' />;
  }

  return (
    <>
      <SectionTitle text='SHOPPING CART' />
      <div className='mt-8 grid gap-6 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotal />
          {user ? (
            <Link
              to='/checkout'
              className='btn btn-primary btn-block mt-4 font-bold'
            >
              Proceed to CheckOut
            </Link>
          ) : (
            <Link
              to='/login'
              className='btn btn-primary btn-block mt-4 font-bold'
            >
              Please Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
