const Input = ({ labelClassName, labelText, value, name, type, inputClassName, placeholder, onChange, minLength, maxLength }) => {
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
        minLength={minLength}
        maxLength={maxLength}
        required
      />
    </>
  );
};

export default Input;
