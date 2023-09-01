
import { Link } from "react-router-dom";
import Entry from "../Entry/Entry";
import './Login.css'


const Login = () => {

    function handleSubmit (evt) {
      evt.preventDefault();
      console.log("You sucessfully logged in")
    }

  return (
    <div className="login">
        <Entry title={'Рады видеть!'} onSubmit={handleSubmit} buttonText={'Войти'} />
      {/* <div className="login__container">
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
            placeholder="Введите E-mail"
            required
          ></input>
          <label htmlFor="password" className="login__label">Пароль</label>
          <input
            value={values.password || ''}
            onChange={handleChange}
            name="password"
            type="password"
            className="login__input"
            placeholder="Введите пароль"
            required
          ></input>
        </fieldset>
        <Button className={'login__button'} type={'submit'} text={isLoading ? "Вход ... " : "Войти"} />
      </form>
      </div> */}
      <div className="login__register">
        <p className="login__register-text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="login__register-button link">Регистрация</Link>
      </div>
    </div>
  );

}

export default Login
