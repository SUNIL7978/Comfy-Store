const Forminput = ({ text, label, name, defaultValue, size }) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text text-base font-semibold capitalize'>
          {label}
        </span>
      </label>
      <input
        type={text}
        defaultValue={defaultValue}
        name={name}
        className={`input input-bordered rounded-2xl ${size}`}
      />
    </div>
  );
};
export default Forminput;
