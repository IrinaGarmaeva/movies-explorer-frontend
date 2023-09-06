import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import useFormAndValidation from "../../hooks/useFormAndValidation";

const Profile = ({ currentUser, toggleMenu, onEditProfile, onSignOut, isLoading }) => {
  const [editProfile, setEditProfile] = useState(false);
  const { values, setValues, errors, handleChange, isValid, setIsValid, resetForm } = useFormAndValidation();
  // const [] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setValues({
      ...values,
      'name': currentUser.name,
      'email': currentUser.email
    })
  }, [currentUser])

  useEffect(() => {
    if(currentUser.name !== values.name || currentUser.email !== values.email) {
      return setIsValid(true)
    }
    return setIsValid(false);
  }, [values]);

  function logOut() {
    toggleMenu();
    onSignOut();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const {name, email} = values;
    onEditProfile(name, email, resetForm);
    setEditProfile(false);
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <fieldset className="profile__fieldset">
          <Input
            labelClassName={"profile__label"}
            labelText={"Имя"}
            type={"text"}
            value={values.name || ""}
            onChange={handleChange}
            name={"name"}
            inputClassName={"profile__input"}
            minLength={2}
            maxLength={40}
             // pattern={''}
            placeholder={'Введите своё имя'}
            errorClassName={'profile__input-span'}
          />
        </fieldset>
        <fieldset className="profile__fieldset">
          <Input
            labelClassName={"profile__label"}
            labelText={"E-mail"}
            type={"text"}
            value={values.email || ""}
            onChange={handleChange}
            name={"email"}
            inputClassName={"profile__input"}
            minLength={4}
            maxLength={40}
            // pattern={''}
            placeholder={'Введите свой e-mail'}
            errorClassName={'profile__input-span'}
          />
        </fieldset>
        {editProfile ? (
          <Button
            className={"profile__button profile__button_type_save"}
            type={"submit"}
            text={isLoading ? "Сохраняю..." : "Сохранить"}
            disabled={isValid ? false : true}
          />
        ) : (
          <>
            <Button
              className={"profile__button profile__button_type_edit"}
              type={"button"}
              text={"Редактировать"}
              disabled={isValid ? false : true}
              onClick={() => setEditProfile(true)}
            />
            <Button
              className={"profile__button profile__button_type_logout"}
              type={"button"}
              text={"Выйти из аккаунта"}
              onClick={logOut}
            />
          </>
        )}
      </form>
    </section>
  );
};

export default Profile;
