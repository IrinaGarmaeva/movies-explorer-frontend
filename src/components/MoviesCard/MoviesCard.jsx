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
    <li className="card">
      <div className="card__header">
        <h2 className="card__title">{card.nameRU}</h2>
        <p className="card__duration">{`${hours}ч ${minutes}м`}</p>
      </div>
      <a href={card.trailerLink} target="_blank"  rel="noreferrer">
        <img
          className="card__image"
          src={`${baseUrl}/${card.image.url}`}
          alt={`Постер фильма ${card.nameRU}`}
        />
      </a>
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
    </li>
  );
};

export default MoviesCard;
