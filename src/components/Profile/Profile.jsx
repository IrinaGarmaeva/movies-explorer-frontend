import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import useFormAndValidation from "../../hooks/useFormAndValidation";

const Profile = ({ user, toggleMenu }) => {
  const [editProfile, setEditProfile] = useState(false);
  const { values, errors, handleChange } = useFormAndValidation();
  const navigate = useNavigate();

  function logOut() {
    toggleMenu();
    navigate("/", { replace: true });
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {user.name}!</h2>
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
          />
        </fieldset>
        {editProfile ? (
          <Button
            className={"profile__button profile__button_type_save"}
            type={"button"}
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
