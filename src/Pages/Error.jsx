import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <main className='grid min-h-[100vh] place-items-center px-8 bg-gradient-to-r from-purple-500 to-pink-500'>
        <div className='text-center'>
          <p className='font-bold text-primary text-9xl'>404</p>
          <h3 className='mt-4 tracking-normal text-3xl sm:text-5xl font-bold'>
            Opps! Page not found
          </h3>
          <h3 className='mt-6 font-semibold text-xl tracking-tight'>
            Sorry, the page you&#39;re looking for doesn&#39;t exist. If you
            think something is broken, report a problem.
          </h3>
          <Link to='/' className='mt-6 btn btn-primary'>
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className='grid min-h-[100vh] place-items-center px-8'>
      <h4 className='text-center font-semibold text-4xl'>
        There was an Error...
      </h4>
    </main>
  );
};
export default Error;
