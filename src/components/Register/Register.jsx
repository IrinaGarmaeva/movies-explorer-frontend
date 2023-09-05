import { Link } from "react-router-dom";
import "./Register.css";
import Entry from "../Entry/Entry";
import Input from "../Input/Input";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { PATTERN_USERNAME, PATTERN_EMAIL, PATTERN_PASSWORD } from '../../utils/consts';

const Register = ({ onRegister }) => {
  const { values, errors, handleChange, resetForm } = useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    const { name, email, password } = values;
    onRegister(name, email, password);
    console.log("You sucessfully registered");
  }

  return (
    <section className="register">
      <Entry
        title={"Добро пожаловать!"}
        onSubmit={handleSubmit}
        buttonText={"Зарегистрироваться"}
      >
        <>
          <Input
            labelClassName={"entry__label"}
            labelText={"Имя"}
            value={values.name || ""}
            name={"name"}
            type={"text"}
            inputClassName={"entry__input"}
            placeholder={"Введите ваше имя"}
            onChange={handleChange}
            pattern={PATTERN_USERNAME}
          />
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
            pattern={PATTERN_PASSWORD}
          />
        </>
      </Entry>
      <div className="register__login">
        <p className="register__login-text">Уже зарегистрированы?</p>
        <Link to="/signin" className="register__login-button link">
          Войти
        </Link>
      </div>
    </section>
  );
};

export default Register;
