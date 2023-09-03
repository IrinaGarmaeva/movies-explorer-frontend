import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Entry.css";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import Button from "../Button/Button";
import useFormAndValidation from "../../hooks/useFormAndValidation";

const Entry = ({ title, onSubmit, buttonText }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { values, errors, handleChange, resetForm } = useFormAndValidation();

  return (
    <div className="entry__container">
      <Logo />
      <h1 className="entry__title">{title}</h1>
      <form className="entry__form" onSubmit={onSubmit} noValidate>
        <fieldset className="entry__fieldset">
          <Input
            labelClassName={"entry__label"}
            labelText={"Имя"}
            value={values.name || ""}
            name={"name"}
            type={"text"}
            inputClassName={"entry__input"}
            placeholder={"Введите ваше имя"}
            onChange={handleChange}
          />
          <Input
            labelClassName={"entry__label"}
            labelText={"E-mail"}
            value={values.email || ""}
            name={"email"}
            type={"email"}
            inputClassName={"entry__input"}
            placeholder={"Введите ваш E-mail"}
            onChange={handleChange}
          />
          {location.pathname === "/signup" && (
            <Input
              labelClassName={"entry__label"}
              labelText={"Пароль"}
              value={values.password || ""}
              name={"password"}
              type={"password"}
              inputClassName={"entry__input"}
              placeholder={"Не короче 8 букв и цифр"}
              onChange={handleChange}
            />
          )}
        </fieldset>
        <Button
          className={"entry__button"}
          type={"submit"}
          text={isLoading ? "Подождите ... " : buttonText}
        />
      </form>
    </div>
  );
};

export default Entry;
