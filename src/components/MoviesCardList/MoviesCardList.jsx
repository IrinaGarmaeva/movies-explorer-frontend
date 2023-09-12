import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import "./MoviesCardList.css";

const MoviesCardList = ({
  movies,
  moviesSaved,
  buttonShow,
  loadMore,
  handleLike,
  handleDeleteLike
}) => {
  const location = useLocation();
  const savedMoviesRoute = location.pathname === "/saved-movies";

  return (
    <section className="cards" aria-label="Секция с карточками фильмов">
      <ul className="cards__container">
        {location.pathname === "/movies" && (
          <>
            {movies.map((item) => {
              return (
                <MoviesCard key={item.id} card={item} handleLike={handleLike} />
              );
            })}
          </>
        )}
        {(location.pathname === "/saved-movies") && (
          <>
            {moviesSaved.map((item) => {
              return <MoviesCard key={item._id} card={item} handleDeleteLike={handleDeleteLike} />;
            })}
          </>
        )}
      </ul>
      {buttonShow && (
        <Button
          className={"cards__button"}
          type={"button"}
          text={"Ещё"}
          onClick={loadMore}
        />
      )}
      {savedMoviesRoute && <div className="cards__button-container"></div>}
    </section>
  );
};

export default MoviesCardList;
