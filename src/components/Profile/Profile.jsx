import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Button from "../Button/Button";
import useFormAndValidation from "../../hooks/useFormAndValidation";

const Profile = ({ user }) => {
  const [editProfile, setEditProfile] = useState(false);

  const { values, errors, handleChange } = useFormAndValidation();

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {user.name}!</h2>
      <form className="profile__form">
        <fieldset className="profile__fieldset">
          <label htmlFor="name" className="profile__label">
            Имя
          </label>
          <input
            type="text"
            value={user.name}
            onChange={handleChange}
            name="name"
            className="profile__input"
          />
        </fieldset>
        <fieldset className="profile__fieldset">
          <label htmlFor="email" className="profile__label">
            E-mail
          </label>
          <input
            type="email"
            value={user.email}
            onChange={handleChange}
            name="email"
            className="profile__input"
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
            <Link to="/">
              <Button
                className={"profile__button profile__button_type_logout"}
                type={"button"}
                text={"Выйти из аккаунта"}
              />
            </Link>
          </>
        )}
      </form>
    </section>
  );
};

export default Profile;
