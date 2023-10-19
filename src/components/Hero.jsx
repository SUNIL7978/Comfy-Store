import { Link } from "react-router-dom";
import Hero1 from "../assets/Hero1.jpg";
import Hero2 from "../assets/Hero2.jpeg";
import Hero3 from "../assets/Hero3.jpeg";
import Hero4 from "../assets/Hero4.jpg";
import Hero5 from "../assets/Hero5.jpeg";

const carouselImages = [Hero1, Hero2, Hero3, Hero4, Hero5];

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24'>
      <div>
        <h1 className='max-w-2xl font-bold capitalize tracking-tight text-4xl sm:text-6xl'>
          We’re changing the way people shop.
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          India&apos;s one of the oldest online home shopping destination
          offering a wide range of home furniture online. Choosing the right
          furniture for your home online will add elegance and functionality to
          your interior decor, while it will also be cost effective and long
          lasting at the same time. Enjoy free shipping as well as free assembly
          at our online store.
        </p>
        <div className='mt-10'>
          <Link to='products' className='btn btn-primary'>
            Our Products
          </Link>
        </div>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center space-x-4 p-4 bg-neutral rounded-box'>
        {carouselImages.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80 object-cover '
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
