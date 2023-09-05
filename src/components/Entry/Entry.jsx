import { useState } from "react";
import "./Entry.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Entry = ({ title, children, onSubmit, buttonText, isValid }) => {
  const [isLoading, setIsLoading] = useState(false);

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
          text={isLoading ? "Подождите ... " : buttonText}
          disabled={isValid ? false : true}
        />
      </form>
    </div>
  );
};

export default Entry;
