import { Hero, FeatureProduct } from "../components";
import { fetchProduct } from "../utils";

const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredproduct"],
  queryFn: () => fetchProduct(url),
};

export const loader = (queryClient) => async () => {
  console.log(queryClient);
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeatureProduct />
    </>
  );
};
export default Landing;
