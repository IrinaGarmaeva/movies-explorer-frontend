import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import "./MoviesCardList.css";

const MoviesCardList = ({ movies }) => {
  const location = useLocation();
  const windowWidth = window.innerWidth;
  const savedMoviesRoute = location.pathname === "/saved-movies";

  const condition1280 = windowWidth >= 890 && movies.length >= 12;
  const condition768 =
    windowWidth >= 400 && windowWidth < 889 && movies.length >= 8;
  const condition320 = windowWidth < 400 && movies.length >= 5;

  const movies768 = movies.slice(0, 8);
  const movies320 = movies.slice(0, 5);

  return (
    <section className="cards" aria-label="Секция с карточками фильмов">
      <ul className="cards__container">
        {location.pathname === "/movies" && (
          <>
            {condition1280 && (
              <>
                {movies.map((item) => {
                  return <MoviesCard key={item.id} card={item} />;
                })}
              </>
            )}
            {condition768 && (
              <>
                {movies768.map((item) => {
                  return <MoviesCard key={item.id} card={item} />;
                })}
              </>
            )}
            {condition320 && (
              <>
                {movies320.map((item) => {
                  return <MoviesCard key={item.id} card={item} />;
                })}
              </>
            )}
          </>
        )}
        {location.pathname === "/saved-movies" && (
          <>
            {movies.map((item) => {
              return <MoviesCard key={item.id} card={item} />;
            })}
          </>
        )}
      </ul>
      {(condition1280 || condition768 || condition320) && (
        <Button className={"cards__button"} type={"button"} text={"Ещё"} />
      )}
      {savedMoviesRoute && <div className="cards__button-container"></div>}
    </section>
  );
};

export default MoviesCardList;
