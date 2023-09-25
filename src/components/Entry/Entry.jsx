import "./Entry.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Entry = ({ title, children, onSubmit, buttonText, isValid }) => {
  return (
    <div className="entry__container">
      <Logo />
      <h1 className="entry__title">{title}</h1>
      <form className="entry__form" onSubmit={onSubmit} noValidate>
        <fieldset className="entry__fieldset">
          {children}
        </fieldset>
        <Button
          className={"entry__button"}
          type={"submit"}
          text={buttonText}
          disabled={!isValid}
        />
      </form>
    </div>
  );
};

export default Entry;
