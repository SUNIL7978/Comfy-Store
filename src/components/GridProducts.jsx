import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const GridProducts = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className='pt-12 grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-9'>
      {products.map((product) => {
        const { title, image, price } = product.attributes;
        const dollarFormat = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='card shadow-xl hover:shadow-2xl w-full transition duration-300'
          >
            <figure className='pt-2 px-2'>
              <img
                src={image}
                alt={title}
                className='w-full h-64 md:h-48 object-cover rounded-xl'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title tracking-wider capitalize'>{title}</h2>
              <span className='text-secondary'>{dollarFormat}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default GridProducts;
