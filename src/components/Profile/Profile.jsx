import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import Button from "../Button/Button";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import {
  PATTERN_USERNAME,
  PATTERN_EMAIL,
  VALIDATION_MESSAGES,
  RESPONSE_MESSAGES
} from "../../utils/consts";
import "./Profile.css";

const Profile = ({ setCurrentUser, setIsSuccessRequest, setIsResponse, setIsInfoPopupOpen, setIsLoggedIn }) => {
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const { values, setValues, errors, setErrors, handleChange, resetForm } =
    useFormAndValidation();

  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const initialValuesChanged = currentUser.name !== values.name || currentUser.email !== values.email

  useEffect(() => {
    setValues({
      ...values,
      name: currentUser.name,
      email: currentUser.email,
    });
    setErrors("");
  }, [currentUser]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, email } = values;
    setIsLoading(true);
    setError('');
    mainApi.editUserdata(name, email)
      .then((userData) => {
        setCurrentUser({
          ...userData,
          name: userData.name,
          email: userData.email,
        });
        setIsSuccessRequest(true);
        setIsResponse(RESPONSE_MESSAGES.successOnUpdateProfile);
        resetForm();
        setIsEditProfile(false);
        setIsInfoPopupOpen(true);
      })
      .catch((err) => {
        setIsSuccessRequest(false);
        setIsEditProfile(true);
        setIsFormValid(false)
        if (err === "Ошибка: 409") {
          setError(RESPONSE_MESSAGES.errorEmail)
        } else {
          setError(RESPONSE_MESSAGES.errorGeneral)
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogOut = () => {
    mainApi
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        window.alert(RESPONSE_MESSAGES.errorGeneral)
      })
  }

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

  useEffect(() => {
    if (errors.name || errors.email) {
      setIsFormValid(false);
    }
    else {
      setIsFormValid(true);
    }
  }, [errors, currentUser]);

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
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
          <span className="profile__input-span">{errors.email}</span>
        </fieldset>
        {isEditProfile ? (
          <>
            <span className="profile__error">{error}</span>
            <Button
              className={"profile__button profile__button_type_save"}
              type={"submit"}
              text={isLoading ? "Сохраняю..." : "Сохранить"}
              disabled={!isFormValid || !initialValuesChanged}
          />
          </>
        ) : (
          <>
            <Button
              className={"profile__button profile__button_type_edit"}
              type={"button"}
              text={"Редактировать"}
              onClick={() => setIsEditProfile((prevState) => !prevState)}
            />
            <Button
              className={"profile__button profile__button_type_logout"}
              type={"button"}
              text={"Выйти из аккаунта"}
              onClick={handleLogOut}
            />
          </>
        )}
      </form>
    </section>
  );
};

export default Profile;
