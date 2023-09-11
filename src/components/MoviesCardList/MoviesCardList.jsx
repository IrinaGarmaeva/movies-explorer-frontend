import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import "./MoviesCardList.css";

const MoviesCardList = ({ movies, buttonShow, onClick }) => {
  const location = useLocation();
  const windowWidth = window.innerWidth;
  const savedMoviesRoute = location.pathname === "/saved-movies";


  return (
    <section className="cards" aria-label="Секция с карточками фильмов">
      <ul className="cards__container">
        {movies.map((item) => {
          return <MoviesCard key={item.id} card={item} />;
        })}
        {/* {location.pathname === "/movies" && (
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
        )} */}
        {location.pathname === "/saved-movies" && (
          <>
            {movies.map((item) => {
              return <MoviesCard key={item.id} card={item} />;
            })}
          </>
        )}
      </ul>
      {buttonShow && (
        <Button
          className={"cards__button"}
          type={"button"}
          text={"Ещё"}
          onClick={onClick}
        />
      )}
      {savedMoviesRoute && <div className="cards__button-container"></div>}
    </section>
  );
};

export default MoviesCardList;
