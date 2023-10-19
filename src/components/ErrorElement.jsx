import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return <h3 className='font-bold text-4xl'>There Was an Error....</h3>;
};
export default ErrorElement;
