import { useState } from "react";
import { Link } from "react-router-dom";
import './Register.css';
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import useFormAndValidation from "../../hooks/useFormAndValidation";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { values, errors, handleChange, resetForm } = useFormAndValidation();

  function handleSubmit (evt) {
    evt.preventDefault();
    const { name, email, password } = values;
    console.log("You sucessfully registered")
  }

  return (
    <div className="register">
      <Logo />
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <fieldset className="register__fieldset">
          <label htmlFor="name" className="register__label">Имя</label>
          <input
            value={values.name || ''}
            onChange={handleChange}
            name="name"
            type="text"
            className="register__input"
            // placeholder="Введите ваше имя"
            required
          ></input>

          <label htmlFor="email" className="register__label">E-mail</label>
          <input
            value={values.email || ''}
            onChange={handleChange}
            name="email"
            type="email"
            className="register__input"
            // placeholder="Email"
            required
          ></input>
          <label htmlFor="password" className="register__label">Пароль</label>
          <input
            value={values.password || ''}
            onChange={handleChange}
            name="password"
            type="password"
            className="register__input"
            // placeholder="Пароль"
            required
          ></input>
        </fieldset>
        <Button className={'register__button'} type={'submit'} text={isLoading ? "Регистрация ... " : "Зарегистрироваться"} />
      </form>
      <div className="register__login">
        <p className="register__login-text">Уже зарегистрированы?</p>
        <Link to="/signin" className="register__login-button link">Войти</Link>
      </div>
    </div>
  );
};

export default Register;
