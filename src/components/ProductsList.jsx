import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className='mt-12 grid gap-y-6'>
      {products.map((product) => {
        const { title, image, price, company } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='p-8 rounded-lg flex flex-wrap flex-col sm:flex-row shadow-xl gap-y-4 hover:shadow-2xl duration-300 bg-base-100 group'
          >
            <img
              src={image}
              alt={title}
              className='w-24 h-24 object-cover sm:w-32 sm:h-32 group-hover:scale-105 rounded-lg'
            />
            <div className='ml-0 sm:ml-11'>
              <h3 className='font-medium text-lg capitalize'>{title}</h3>
              <h3 className='font-medium  capitalize'>{company}</h3>
            </div>
            <p className='ml-0 sm:ml-auto font-semibold'>{dollarAmount}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
