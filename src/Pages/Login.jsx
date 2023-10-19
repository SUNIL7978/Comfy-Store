import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { Forminput, SubmitBtn } from "../components";
import { fetchProduct } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../Features/Users/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formdata = await request.formData();
    const data = Object.fromEntries(formdata);
    try {
      const response = await fetchProduct.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("Logged in Successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await fetchProduct.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("Welcome to Guest User");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Please try again, login as guest user");
    }
  };

  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96 p-8 shadow-lg bg-base-100 flex flex-col gap-y-6'
      >
        <h3 className='text-center font-bold text-2xl uppercase underline text-blue-800'>
          Login
        </h3>
        <Forminput
          type='email'
          label='email'
          name='identifier'
          defaultValue='test@test.com'
        />
        <Forminput
          label='Password'
          type='password'
          name='password'
          defaultValue='secret'
        />
        <div className='mt-4'>
          <SubmitBtn text='Login' />
        </div>
        <button
          type='button'
          className='mt-1 btn btn-secondary  font-bold text-sm'
          onClick={loginAsGuestUser}
        >
          Guest User
        </button>
        <p className='text-center'>
          Don&#39;t have an account?
          <Link
            to='/register'
            className='ml-2 text-blue-700 underline link link-hover link-primary'
          >
            Sign Up Free
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
