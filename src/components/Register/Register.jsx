import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mainApi from "../../utils/MainApi";
import Entry from "../Entry/Entry";
import Input from "../Input/Input";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { PATTERN_USERNAME, PATTERN_EMAIL, PATTERN_PASSWORD, VALIDATION_MESSAGES, RESPONSE_MESSAGES } from '../../utils/consts';
import "./Register.css";

const Register = ({ setIsSuccessRequest, setIsLoggedIn, setIsResponse, setIsInfoPopupOpen }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const { values, errors, setErrors, handleChange, resetForm } = useFormAndValidation();

  const navigate = useNavigate();

  useEffect(() => {
    if(errors.name || errors.email || errors.password || !values.name || !values.email || !values.password) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [errors])

  const handleRegister = (evt) => {
    evt.preventDefault();
    const { name, email, password } = values;
    setIsLoading(true);
    mainApi
      .registerUser(name, email, password)
      .then(() => {
        setIsSuccessRequest(true);
        setIsLoggedIn(true);
        setIsResponse(RESPONSE_MESSAGES.successOnRegistration);
        navigate("/movies", { replace: true });
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        setIsSuccessRequest(false);
        if (err === "Ошибка: 409") {
          return setIsResponse(RESPONSE_MESSAGES.errorEmail);
        }
        return setIsResponse(RESPONSE_MESSAGES.errorGeneral);
      })
      .finally(() => {
        setIsLoading(false);
        setIsInfoPopupOpen(true);
      });
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
        onSubmit={handleRegister}
        buttonText={isLoading ? 'Подождите...' : "Зарегистрироваться"}
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
            isDisabled={isLoading}
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
