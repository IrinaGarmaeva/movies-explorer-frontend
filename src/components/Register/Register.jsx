import { useState } from "react";
import { Link } from "react-router-dom";
import './Register.css';
import logo from '../../images/logo.svg'

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="register">
      <img src={logo} alt="Логотип" className="register__logo"/>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form className="register__form auth__form">
        <fieldset className="auth__fieldset">
          <label htmlFor="name" className="auth__label">Имя</label>
          <input
            // value={formValue.email}
            // onChange={handleChange}
            name="name"
            type="name"
            className="auth__input"
            // placeholder="Введите ваше имя"
            required
          ></input>
          <label htmlFor="email" className="auth__label">E-mail</label>
          <input
            // value={formValue.email}
            // onChange={handleChange}
            name="email"
            type="email"
            className="auth__input"
            // placeholder="Email"
            required
          ></input>
          <label htmlFor="password" className="auth__label">Пароль</label>
          <input
            // value={formValue.password}
            // onChange={handleChange}
            name="password"
            type="password"
            className="auth__input"
            // placeholder="Пароль"
            required
          ></input>
        </fieldset>
        <button className="auth__button">
          {isLoading ? "Регистрация ... " : "Зарегистрироваться"}
        </button>
      </form>
      <div className="auth__login">
        <p className="auth__login-text">Уже зарегистрированы?</p>
        <Link to="/signin" className="auth__login-button">Войти</Link>
      </div>
    </div>
  );
};

export default Register;
