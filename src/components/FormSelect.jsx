const FormSelect = ({ name, size, defaultValue, label, list }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text capitalize text-base font-semibold'>
          {label}
        </span>
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className={`select select-bordered rounded-2xl ${size}`}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
