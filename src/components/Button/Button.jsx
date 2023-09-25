import "./Button.css";

const Button = ({ className, type, onClick, text, disabled }) => {
  return (
    <button className={`${className} button`} type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
