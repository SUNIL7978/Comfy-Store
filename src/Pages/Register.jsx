import { Form, Link, redirect } from "react-router-dom";
import { Forminput, SubmitBtn } from "../components";
import { fetchProduct } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formdata = await request.formData();
  const data = Object.fromEntries(formdata);
  try {
    const response = await fetchProduct.post("/auth/local/register", data);
    console.log(response);
    toast.success("Acoount Created Successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className='grid h-screen place-items-center'>
      <Form
        method='post'
        className='card w-96 shadow-lg flex flex-col gap-y-3 bg-base-100 p-8'
      >
        <h4 className='text-center font-bold text-lg uppercase'>Register</h4>
        <Forminput label='Name' type='text' name='username' />
        <Forminput label='Email' type='email' name='email' />
        <Forminput label='Password' type='password' name='password' />
        <div className='mt-3'>
          <SubmitBtn text='Register' />
        </div>
        <p className='text-center font-medium'>
          Have account?
          <Link
            to='/login'
            className='ml-2 link-hover link link-primary underline'
          >
            Log in
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
