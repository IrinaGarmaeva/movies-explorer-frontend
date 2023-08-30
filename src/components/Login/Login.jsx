import { useState } from "react";
import { Link } from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import logo from '../../images/logo.svg'
import './Login.css'

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
      <img src={logo} alt="Логотип" className="login__logo"/>
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
        <button className="login__button">
          {isLoading ? "Вход ... " : "Войти"}
        </button>
      </form>
      <div className="login__register">
        <p className="login__register-text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="login__register-button link">Регистрация</Link>
      </div>
    </div>
  );

}

export default Login
