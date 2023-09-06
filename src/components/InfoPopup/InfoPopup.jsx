import Button from "../Button/Button";
import imageOnSuccess from "../../images/success.png";
import imageOnFail from "../../images/fail.png";
import "./InfoPopup.css";

const InfoPopup = ({ isOpen, onClose, isSucess, message }) => {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <Button
          type={"button"}
          onClick={onClose}
          className={"popup__close-btn"}
          aria-label="Кнопка закрытия модального окна"
        />
        <div
          className="popup__sign"
          style={
            isSucess
              ? { backgroundImage: `url(${imageOnSuccess})` }
              : { backgroundImage: `url(${imageOnFail})` }
          }
        />
        <h2 className="popup__text">
          {message}
          {/* {isSucess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."} */}
        </h2>
      </div>
    </div>
  );
};

export default InfoPopup;
