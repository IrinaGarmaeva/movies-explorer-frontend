import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import Button from "../Button/Button";

const MoviesCard = ({ card }) => {
  const [savedCard, setSavedCard] = useState(false);
  const location = useLocation();
  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration - hours * 60;
  const baseUrl = "https://api.nomoreparties.co";

  return (
    <div className="card">
      <div className="card__header">
        <p className="card__title">{card.nameRU}</p>
        <p className="card__duration">{`${hours}ч ${minutes}м`}</p>
      </div>
      <img
        className="card__image"
        src={`${baseUrl}/${card.image.url}`}
        alt="Постер фильма"
      />
      {location.pathname === "/saved-movies" ? (
        <Button
          className={"card__button card__button_type_delete"}
          type={"button"}
          text="&#10006;"
        />
      ) : (
        <>
          {savedCard ? (
            <Button
              className={"card__button card__button_type_saved"}
              type={"button"}
              text="&#10003;"
              onClick={() => setSavedCard(false)}
            />
          ) : (
            <Button
              className={"card__button card__button_type_add"}
              type={"button"}
              text={"Сохранить"}
              onClick={() => setSavedCard(true)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MoviesCard;
