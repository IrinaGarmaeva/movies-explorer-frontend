import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Entry from "../Entry/Entry";
import Input from "../Input/Input";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { PATTERN_USERNAME, PATTERN_EMAIL, PATTERN_PASSWORD, VALIDATION_MESSAGES } from '../../utils/consts';

const Register = ({ onRegister }) => {
  const [isFormValid, setIsFormValid] = useState(false)
  const { values, errors, setErrors, handleChange, resetForm } = useFormAndValidation();

  useEffect(() => {
    if(errors.name || errors.email || errors.password) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [errors])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, email, password } = values;
    onRegister(name, email, password, resetForm);
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

  const handleChangeName = (evt) => {
    handleChange(evt);
    const {name, value} = evt.target;
    if(!PATTERN_USERNAME.test(value)) {
      setErrors({...errors, [name]: VALIDATION_MESSAGES.frontend.name })
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
    <section className="register">
      <Entry
        title={"Добро пожаловать!"}
        onSubmit={handleSubmit}
        buttonText={"Зарегистрироваться"}
        isValid={isFormValid}
      >
        <>
          <Input
            labelClassName={"entry__label"}
            labelText={"Имя"}
            value={values.name || ""}
            name={"name"}
            type={"text"}
            inputClassName={"entry__input"}
            placeholder={"Введите ваше имя"}
            onChange={handleChangeName}
            errorClassName={'entry__input-error'}
            errorMessage={errors.name}
          />
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
        </>
      </Entry>
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
