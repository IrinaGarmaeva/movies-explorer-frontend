import { Link } from "react-router-dom";
import Entry from "../Entry/Entry";
import Input from "../Input/Input";
import "./Login.css";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { PATTERN_EMAIL, VALIDATION_MESSAGES } from '../../utils/consts';

const Login = ({ onLogin }) => {
  const { values, errors, handleChange, isValid, resetForm } = useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    const {email, password} = values;
    onLogin(email, password);
    resetForm();
    console.log("You sucessfully logged in");
  }

  return (
    <section className="login">
      <Entry
        title={"Рады видеть!"}
        onSubmit={handleSubmit}
        buttonText={"Войти"}
        isValid={isValid}
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
            pattern={PATTERN_EMAIL}
            errorClassName={'entry__input-error'}
            errorMessage={errors.email ? VALIDATION_MESSAGES.frontend.email : ''}
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
            errorClassName={'entry__input-error'}
            errorMessage={errors.password ? VALIDATION_MESSAGES.frontend.password : ''}
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
