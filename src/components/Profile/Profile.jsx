import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Button from "../Button/Button";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import {
  PATTERN_USERNAME,
  PATTERN_EMAIL,
  VALIDATION_MESSAGES,
} from "../../utils/consts";
import "./Profile.css";

const Profile = ({ toggleMenu, onEditProfile, onSignOut, isLoading }) => {
  const [editProfile, setEditProfile] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const { values, setValues, errors, setErrors, handleChange, resetForm } =
    useFormAndValidation();

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({
      ...values,
      name: currentUser.name,
      email: currentUser.email,
    });
    setErrors('');
  }, [currentUser]);

  //errors.name || errors.email ||
  useEffect(() => {
    if (currentUser.name === values.name || currentUser.email === values.email ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [errors]);

  const logOut = () => {
    toggleMenu();
    onSignOut();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, email } = values;
    onEditProfile(name, email, resetForm);
    setEditProfile(false);
  };

  const handleChangeName = (evt) => {
    handleChange(evt);
    const { name, value } = evt.target;
    if (!PATTERN_USERNAME.test(value)) {
      setErrors({ ...errors, [name]: VALIDATION_MESSAGES.frontend.name });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleChangeEmail = (evt) => {
    handleChange(evt);
    const { name, value } = evt.target;
    if (!PATTERN_EMAIL.test(value)) {
      setErrors({ ...errors, [name]: VALIDATION_MESSAGES.frontend.email });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="profile__fieldset">
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            <input
              type="text"
              value={values.name || ""}
              onChange={handleChangeName}
              name="name"
              className="profile__input"
              minLength={2}
              maxLength={30}
              placeholder="Введите своё имя"
              disabled={isLoading ? 'disabled': ''}
            />
          </div>
          <span className="profile__input-span">{errors.name}</span>
        </fieldset>
        <fieldset className="profile__fieldset">
        <div className="profile__input-container">
            <label className="profile__label" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              value={values.email || ""}
              onChange={handleChangeEmail}
              name="email"
              className="profile__input"
              placeholder="Введите свой e-mail"
              disabled={isLoading ? 'disabled': ''}
            />
          </div>
          <span className="profile__input-span">{errors.email}</span>
        </fieldset>
        {editProfile ? (
          <Button
            className={"profile__button profile__button_type_save"}
            type={"submit"}
            text={isLoading ? "Сохраняю..." : "Сохранить"}
            disabled={!isFormValid}
          />
        ) : (
          <>
            <Button
              className={"profile__button profile__button_type_edit"}
              type={"button"}
              text={"Редактировать"}
              disabled={!isFormValid}
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
