import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import './Login.css'
import logo from '../../images/logo.svg';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { values, errors, handleChange, resetForm } = useFormAndValidation();

    function handleSubmit (evt) {
      evt.preventDefault();
      const { email, password } = values;
      console.log("You sucessfully logged in")
    }

  return (
    <div className="login">
      <Logo />
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <fieldset className="login__fieldset">
          <label htmlFor="email" className="login__label">E-mail</label>
          <input
            value={values.email || ''}
            onChange={handleChange}
            name="email"
            type="email"
            className="login__input"
            // placeholder="Email"
            required
          ></input>
          <label htmlFor="password" className="login__label">Пароль</label>
          <input
            value={values.password || ''}
            onChange={handleChange}
            name="password"
            type="password"
            className="login__input"
            // placeholder="Пароль"
            required
          ></input>
        </fieldset>
        <Button className={'login__button'} type={'submit'} text={isLoading ? "Вход ... " : "Войти"} />
      </form>
      <div className="login__register">
        <p className="login__register-text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="login__register-button link">Регистрация</Link>
      </div>
    </div>
  );

}

export default Login
