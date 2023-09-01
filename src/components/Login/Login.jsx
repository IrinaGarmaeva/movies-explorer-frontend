import { Link, useNavigate } from "react-router-dom";
import Entry from "../Entry/Entry";
import "./Login.css";

const Login = ({ toggleMenu }) => {
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate('/movies', { replace: true });
    toggleMenu()
    console.log("You sucessfully logged in");
  }

  return (
    <div className="login">
      <Entry
        title={"Рады видеть!"}
        onSubmit={handleSubmit}
        buttonText={"Войти"}
      />
      <div className="login__register">
        <p className="login__register-text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="login__register-button link">
          Регистрация
        </Link>
      </div>
    </div>
  );
};

export default Login;
