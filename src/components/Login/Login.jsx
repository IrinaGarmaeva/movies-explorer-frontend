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
      <div className="login__register">
        <p className="login__register-text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="login__register-button link">Регистрация</Link>
      </div>
    </div>
  );

}

export default Login
