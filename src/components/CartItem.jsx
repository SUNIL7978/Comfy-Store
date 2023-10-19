import { useDispatch } from "react-redux";
import { formatPrice, getStock } from "../utils";
import { editItem, removeItem } from "../Features/Cart/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartId }));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartId, amount: e.target.value }));
  };

  const { cartId, image, amount, title, ProductColor, price, company } =
    cartItem;
  return (
    <div className='mb-8 flex gap-y-6 sm:flex-row flex-col flex-wrap border-b border-base-300 pb-4 last:border-b-0'>
      <img
        src={image}
        alt={title}
        className='h-24 w-24 rounded-lg sm:w-32 sm-h-32 object-cover'
      />
      {/* PRODUCT INFO */}
      <div className='sm:ml-20 sm:w-36'>
        {/* TITLE */}
        <h3 className='text-medium font-medium capitalize'>{title}</h3>
        {/* COMPANY */}
        <h4 className='text-sm mt-2 capitalize'>{company}</h4>
        {/* COLORS */}
        <p className='mt-4 flex items-center text-base gap-x-4'>
          Colors:
          <span
            className='badge badge-sm'
            style={{ backgroundColor: ProductColor }}
          ></span>
        </p>
      </div>
      <div className='sm:ml-12'>
        <div className='form-control max-w-xs'>
          <label htmlFor='amount' className='label p-0'>
            <span className='label-text text-sm'>Amount</span>
          </label>
          <select
            name='amount'
            id='amount'
            value={amount}
            className='select select-bordered select-sm mt-8'
            onChange={handleAmount}
          >
            {getStock(amount + 5)}
          </select>
          <button
            className='mt-2 link link-primary link-hover text-sm'
            onClick={removeItemFromTheCart}
          >
            remove
          </button>
        </div>
      </div>
      <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
    </div>
  );
};
export default CartItem;
