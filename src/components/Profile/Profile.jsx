import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import useFormAndValidation from "../../hooks/useFormAndValidation";

const Profile = ({ user, toggleMenu, onSignOut }) => {
  const [editProfile, setEditProfile] = useState(false);
  const { values, errors, handleChange } = useFormAndValidation();
  const navigate = useNavigate();

  function logOut() {
    toggleMenu();
    onSignOut();
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {user.name}!</h1>
      <form className="profile__form">
        <fieldset className="profile__fieldset">
          <Input
            labelClassName={"profile__label"}
            labelText={"Имя"}
            type={"text"}
            value={values.name || user.name}
            onChange={handleChange}
            name={"name"}
            inputClassName={"profile__input"}
            minLength={2}
            maxLength={40}
            placeholder={'Введите своё имя'}
            errorClassName={'profile__input-span'}
          />
        </fieldset>
        <fieldset className="profile__fieldset">
          <Input
            labelClassName={"profile__label"}
            labelText={"E-mail"}
            type={"text"}
            value={values.email || user.email}
            onChange={handleChange}
            name={"email"}
            inputClassName={"profile__input"}
            minLength={4}
            maxLength={40}
            placeholder={'Введите свой e-mail'}
            errorClassName={'profile__input-span'}
          />
        </fieldset>
        {editProfile ? (
          <Button
            className={"profile__button profile__button_type_save"}
            type={"submit"}
            text={"Сохранить"}
            onClick={() => setEditProfile(false)}
          />
        ) : (
          <>
            <Button
              className={"profile__button profile__button_type_edit"}
              type={"button"}
              text={"Редактировать"}
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
