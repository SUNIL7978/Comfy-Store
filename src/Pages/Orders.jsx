import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchProduct } from "../utils";
import SectionTitle from "../components/SectionTitle";
import { ComplexPagination, OrderList } from "../components";

export const orderQuery = (params, user) => {
  return {
    querykey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      fetchProduct.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn("You must be a logged in to view order");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        orderQuery(params, user)
      );
      console.log(response);
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errorMessage);
      if (error.response.status === 401) return redirect("/login");
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text='Please make a order' />;
  }
  return (
    <>
      <SectionTitle text='Your Order' />
      <OrderList />
      <ComplexPagination />
    </>
  );
};
export default Orders;
