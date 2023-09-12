import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import Button from "../Button/Button";
import { SERVER_URL, duration } from "../../utils/consts";

const MoviesCard = ({ card, handleLike, handleDeleteLike }) => {
  const [isSavedMovie, setSavedCard] = useState(card.isSaved);
  const location = useLocation();

  const handleLikeClick = () => {
    setSavedCard(!isSavedMovie);
    handleLike(card);
  }

  const handleDeleteClick = () => {
    if(location.pathname === 'movies') {
      setSavedCard(!isSavedMovie);
      handleDeleteLike(card);
    } else {
      handleDeleteLike(card);
    }
  }

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__title">{card.nameRU}</h2>
        <p className="card__duration">{duration(card)}</p>
      </div>
      <a href={card.trailerLink} target="_blank"  rel="noreferrer">
        <img
          className="card__image"
          src={location.pathname === '/movies' ? `${SERVER_URL}/${card.image.url}` : card.image}
          alt={`Постер фильма ${card.nameRU}`}
        />
      </a>
      {location.pathname === "/saved-movies" ? (
        <Button
          className={"card__button card__button_type_delete"}
          type={"button"}
          text="&#10006;"
          onClick={handleDeleteClick}
        />
      ) : (
        <>
          {isSavedMovie ? (
            <Button
              className={"card__button card__button_type_saved"}
              type={"button"}
              text="&#10003;"
              onClick={handleDeleteClick}
            />
          ) : (
            <Button
              className={"card__button card__button_type_add"}
              type={"button"}
              text={"Сохранить"}
              onClick={handleLikeClick}
            />
          )}
        </>
      )}
    </li>
  );
};

export default MoviesCard;
