import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotal = () => {
  const { orderTotal, tax, shipping, cartTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className='card bg-base-300'>
      <div className='card-body'>
        {/* SUBTOTAL */}
        <p className='flex justify-between border-b border-base-200 text-xs pb-4'>
          <span className='font-bold'>Sub Total</span>
          <span className='font-medium'>{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className='flex justify-between border-b border-base-200 text-xs pb-4'>
          <span className='font-bold'>Shipping</span>
          <span className='font-medium'>{formatPrice(shipping)}</span>
        </p>
        {/* TAX */}
        <p className='flex justify-between border-b border-base-200 text-xs pb-4'>
          <span className='font-bold'>Tax</span>
          <span className='font-medium'>{formatPrice(tax)}</span>
        </p>
        {/* ORDER TOTAL */}
        <p className='flex justify-between mt-4 text-sm'>
          <span className='font-bold'>Order Total</span>
          <span className='font-medium'>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotal;
