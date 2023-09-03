import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import Entry from "../Entry/Entry";

const Register = () => {
  const navigate = useNavigate()

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("You sucessfully registered");
    navigate('/signin', { replace: true });
  }

  return (
    <section className="register">
      <Entry title={'Добро пожаловать!'} onSubmit={handleSubmit} buttonText={'Зарегистрироваться'} />
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
