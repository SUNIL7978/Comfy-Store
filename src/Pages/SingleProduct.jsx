import { Link, useLoaderData } from "react-router-dom";
import { fetchProduct, formatPrice, getStock } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/Cart/cartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => fetchProduct.get(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return { product: response.data.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, description, price, title, company, colors } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  const [ProductColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartId: product.id + ProductColor,
    productId: product.id,
    title,
    price,
    image,
    company,
    amount,
    ProductColor,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Product</Link>
          </li>
        </ul>
      </div>
      <div className='grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 mt-5'>
        <img
          src={image}
          alt={title}
          className='w-96 h-96 rounded-xl lg:w-full object-cover'
        />
        <div>
          <h1 className='text-3xl capitalize font-bold'>{title}</h1>
          <h4 className='text-xl  font-bold mt-2'>{company}</h4>
          <p className='mt-3 font-bold'>{dollarAmount}</p>
          <p className='mt-6 leading-8'>{description}</p>
          {/* COLORS */}
          <div className='mt-6'>
            <h4 className='capitalize text-md font-medium tracking-wider'>
              Colors
            </h4>
            <div className='mt-2'>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type='button'
                    className={`badge w-6 h-6 mr-2 ${
                      color === ProductColor && `border-2 border-secondary`
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className='form-control w-full max-w-xs'>
            <label htmlFor='amount' className='label'>
              <h4 className='font-medium capitalize text-md tracking-wider'>
                Amount
              </h4>
            </label>
            <select
              name={amount}
              id='amount'
              className='select select-secondary select-bordered select-md'
              onChange={handleAmount}
            >
              {getStock(10)}
            </select>
          </div>
          {/* {CART BTN} */}
          <div className='mt-10'>
            <button
              type='button'
              className='btn btn-secondary btn-md'
              onClick={addToCart}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
