import { Link } from "react-router-dom";
import Entry from "../Entry/Entry";
import Input from "../Input/Input";
import "./Login.css";
import useFormAndValidation from "../../hooks/useFormAndValidation";

const Login = ({ onLogin }) => {
  const { values, errors, handleChange, resetForm } = useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    const {email, password} = values;
    onLogin(email, password);
    console.log("You sucessfully logged in");
  }

  return (
    <section className="login">
      <Entry
        title={"Рады видеть!"}
        onSubmit={handleSubmit}
        buttonText={"Войти"}
      >
        <Input
            labelClassName={"entry__label"}
            labelText={"E-mail"}
            value={values.email || ""}
            name={"email"}
            type={"email"}
            inputClassName={"entry__input"}
            placeholder={"Введите ваш E-mail"}
            onChange={handleChange}
          />
          <Input
            labelClassName={"entry__label"}
            labelText={"Пароль"}
            value={values.password || ""}
            name={"password"}
            type={"password"}
            inputClassName={"entry__input"}
            placeholder={"Не короче 8 букв и цифр"}
            onChange={handleChange}
          />
      </Entry>
      <div className="login__register">
        <p className="login__register-text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="login__register-button link">
          Регистрация
        </Link>
      </div>
    </section>
  );
};

export default Login;
