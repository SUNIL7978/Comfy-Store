const SectionTitle = ({ text }) => {
  return (
    <div className='border-b border-base-300 pb-5 mt-8'>
      <h2 className='text-3xl font-bold capitalize tracking-wider text-center'>
        {text}
      </h2>
    </div>
  );
};
export default SectionTitle;
