import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mainApi from "../../utils/MainApi";
import Entry from "../Entry/Entry";
import Input from "../Input/Input";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { PATTERN_EMAIL, PATTERN_PASSWORD, VALIDATION_MESSAGES, RESPONSE_MESSAGES } from '../../utils/consts';
import "./Login.css";

const Login = ({ setIsLoggedIn, setIsInfoPopupOpen, setIsSuccessRequest, setIsResponse }) => {
  const { values, errors, setErrors, handleChange, resetForm } = useFormAndValidation();
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if(errors.email || errors.password || !values.email || !values.password) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [errors])

  const handleLogin = (evt) => {
    evt.preventDefault();
    const {email, password} = values;
    setIsLoading(true);
    mainApi.loginUser(email, password)
    .then(() => {
      setIsLoggedIn(true);
      navigate("/movies", { replace: true });
      resetForm();
    })
    .catch((err) => {
      setIsInfoPopupOpen(true);
      setIsSuccessRequest(false);
      if(err === "Ошибка: 401") {
        return setIsResponse(RESPONSE_MESSAGES.errorLogin);
      }
      return setIsResponse(RESPONSE_MESSAGES.errorGeneral);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const handleChangeEmail = (evt) => {
    handleChange(evt);
    const {name, value} = evt.target;
    if(!PATTERN_EMAIL.test(value)) {
      setErrors({...errors, [name]: VALIDATION_MESSAGES.frontend.email })
    } else {
      setErrors({...errors, [name]: ''})
    }
  }

  const handleChangePassword = (evt) => {
    handleChange(evt);
    const {name, value} = evt.target;
    if(!PATTERN_PASSWORD.test(value)) {
      setErrors({...errors, [name]: VALIDATION_MESSAGES.frontend.password })
    } else {
      setErrors({...errors, [name]: ''})
    }
  }

  return (
    <section className="login">
      <Entry
        title={"Рады видеть!"}
        onSubmit={handleLogin}
        buttonText={isLoading ? 'Подождите...' : "Войти"}
        isValid={isFormValid}
      >
        <Input
            labelClassName={"entry__label"}
            labelText={"E-mail"}
            value={values.email || ""}
            name={"email"}
            type={"email"}
            inputClassName={"entry__input"}
            placeholder={"Введите ваш E-mail"}
            onChange={handleChangeEmail}
            errorClassName={'entry__input-error'}
            errorMessage={errors.email}
            isDisabled={isLoading}
          />
          <Input
            labelClassName={"entry__label"}
            labelText={"Пароль"}
            value={values.password || ""}
            name={"password"}
            type={"password"}
            inputClassName={"entry__input"}
            placeholder={"Не короче 8 букв и цифр"}
            onChange={handleChangePassword}
            errorClassName={'entry__input-error'}
            errorMessage={errors.password}
            isDisabled={isLoading}
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
