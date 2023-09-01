const Input = ({ labelClassName, labelText, value, name, type, inputClassName, placeholder, onChange }) => {
  return (
    <>
      <label htmlFor={name} className={labelClassName}>
        {labelText}
      </label>
      <input
        value={value}
        name={name}
        type={type}
        className={inputClassName}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </>
  );
};

export default Input;
