import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Entry from "../Entry/Entry";
import Input from "../Input/Input";
import "./Login.css";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { PATTERN_EMAIL, PATTERN_PASSWORD, VALIDATION_MESSAGES } from '../../utils/consts';

const Login = ({ onLogin }) => {
  const { values, errors, setErrors, handleChange, resetForm } = useFormAndValidation();
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if(errors.email || errors.password) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [errors])

  function handleSubmit(evt) {
    evt.preventDefault();
    const {email, password} = values;
    onLogin(email, password);
    resetForm();
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
        onSubmit={handleSubmit}
        buttonText={"Войти"}
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
