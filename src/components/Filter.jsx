import { Form, Link, useLoaderData } from "react-router-dom";
import Forminput from "./Forminput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filter = () => {
  const { meta, params } = useLoaderData();
  const { search, price, company, category, order, shipping } = params;
  return (
    <Form className='bg-base-200 grid gap-x-4 gap-y-8 px-8 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-lg items-center'>
      <Forminput
        label='Seacrh Product'
        type='search'
        name='search'
        size='input-sm'
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label='Select Category'
        name='category'
        list={meta.categories}
        size='select-sm'
        defaultValue={category}
      />
      {/* {SELECT COMPANY} */}
      <FormSelect
        label='Select Company'
        name='company'
        list={meta.companies}
        size='select-sm'
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label='Sort By'
        name='order'
        list={["a-z", "z-a", "high-low", "low-high"]}
        size='select-sm'
        defaultValue={order}
      />
      {/* SELECT RANGE */}
      <FormRange
        label='Select Price'
        name='price'
        size='range-sm'
        price={price}
      />
      {/* SELECT SHIPPING */}
      <FormCheckbox
        label='Free Shipping'
        name='shipping'
        size='checkbox-sm'
        defaultValue={shipping}
      />
      {/* BUTTON */}
      <button type='submit' className='btn btn-primary btn-sm rounded-2xl'>
        Search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm rounded-2xl'>
        Reset
      </Link>
    </Form>
  );
};
export default Filter;
