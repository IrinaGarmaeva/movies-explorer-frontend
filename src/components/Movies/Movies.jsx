import { useEffect, useState } from "react";
import "./Movies.css";
import moviesApi from "../../utils/MoviesApi";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { saveToLocalStorage, getFromLocalStorage } from "../../utils/localStorageFunctions";
import {
  NOTHING_FOUND,
  moviesFiltredBySearchRequest,
  moviesFiltredByDuration,
} from "../../utils/consts";

const Movies = () => {
  const [moviesInitial, setMoviesInitial] = useState([]); // фильмы, полученные из запроса к апи(все фильмы с апи)
  const [moviesSearched, setMoviesSearched] = useState([]); // отфильтрованные фильмы
  // const [moviesSaved, setMoviesSaved] = useState([]); // сохраненные фильмы
  const [isSearch, setIsSearch] = useState(false); // preloader
  const [errorText, setErrorText] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [searchRequest, setSearchRequest] = useState("");
  const [isTumblerActive, setIsTumblerActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // здесь будет отрисовываться данные из локал сторэдж
  useEffect(() => {
    const dataStorage = getFromLocalStorage("search");
    if (dataStorage) {
      setMoviesSearched(dataStorage.resultFinal);
      setSearchRequest(dataStorage.searchRequest);
      setIsTumblerActive(dataStorage.isTumblerActive);
      setErrorText(dataStorage.errorText);
    } else {
      setMoviesSearched([])
    }
  }, []);

  useEffect(() => {

  })

  const getMoviesCounter = () => {
    const counter = { initialValue: 12, more: 3 };

    if (windowWidth < 890) {
      counter.initialValue = 8;
      counter.addValue = 2;
    }
    if (windowWidth < 400) {
      counter.initialValue = 5;
      counter.addValue = 1;
    }

    return counter;
  };

  const counter = getMoviesCounter();
  const [moviesCounter, setMoviesCounter] = useState(counter.initialValue); // фильмы, которые будут показываться изначально на странице , на 1280 12шт, на 768 8 шт и тд


  async function getMovies(searchRequest) {
    setErrorText("");

    if (!searchRequest) {
      setIsValid(false);
      return;
    }

    try {
      setIsSearch(true);
      const storageSearch = getFromLocalStorage("initial-movies");  //TODO ПОПРОБОВАТЬ СОХРАНИТЬ НАЙДЕННЫЕ ВСЕ ФИЛЬМЫ С АПИ В СТЕЙТ И ЗАБИРАТЬ ДАННЫЕ ИЗ СТЕЙТА moviesInitital

      if (storageSearch) {
        const moviesFiltredByRequest = moviesFiltredBySearchRequest(storageSearch, searchRequest.trim());
        const resultFinal = moviesFiltredByDuration(moviesFiltredByRequest, isTumblerActive);
        resultFinal.length === 0 ? setErrorText(NOTHING_FOUND) : setErrorText("");
        saveToLocalStorage("search", {resultFinal, searchRequest, isTumblerActive, errorText});
        setMoviesSearched(resultFinal);
      } else {
        const movies = await moviesApi.getMovies();
        setMoviesInitial(movies);
        saveToLocalStorage("initial-movies", movies);

        const moviesFiltredByRequest = moviesFiltredBySearchRequest(movies, searchRequest.trim());
        const resultFinal = moviesFiltredByDuration(moviesFiltredByRequest, isTumblerActive);
        resultFinal.length === 0 ? setErrorText(NOTHING_FOUND) : setErrorText("");

        setMoviesSearched(resultFinal);
      }
    } catch (error) {
      console.log(error);
      setErrorText("Во время запроса произошла ошибка.<br>Возможно, проблема с соединением или сервер недоступен.<br>Подождите немного и попробуйте ещё раз");
    } finally {
      setIsSearch(false);
    }
  }

    // loadMore
    function handleLoadMoreMovies() {
      console.log("нажали на еще")
      const { addValue } = getMoviesCounter();
      setMoviesCounter(moviesCounter + addValue);
      setMoviesSearched(moviesSearched.slice(0, moviesCounter))
    }

    function handleTumblerClick(isTumblerActive) {
      console.log('click on tumbler')
      const storageSearch = getFromLocalStorage("initial-movies");  //TODO ПОПРОБОВАТЬ СОХРАНИТЬ НАЙДЕННЫЕ ВСЕ ФИЛЬМЫ С АПИ В СТЕЙТ И ЗАБИРАТЬ ДАННЫЕ ИЗ СТЕЙТА moviesInitital

      if (storageSearch) {
        const moviesFiltredByRequest = moviesFiltredBySearchRequest(storageSearch, searchRequest.trim());
        const resultFinal = moviesFiltredByDuration(moviesFiltredByRequest, isTumblerActive);
        resultFinal.length === 0 ? setErrorText(NOTHING_FOUND) : setErrorText("");
        saveToLocalStorage("search", {resultFinal, searchRequest, isTumblerActive, errorText});
        setMoviesSearched(resultFinal);
      }
    }


  return (
    <>
      <SearchForm
        searchRequest={searchRequest}
        setSearchRequest={setSearchRequest}
        onSearch={getMovies}
        isValid={isValid}
        isTumblerActive={isTumblerActive}
        setIsTumblerActive={setIsTumblerActive}
        handleTumblerClick={handleTumblerClick}
      />
      {errorText && <div className="movies__error">{errorText}</div>}
      {isSearch ? (
        <Preloader />
      ) : (
        moviesSearched.length !== 0 && (
          <MoviesCardList
            movies={moviesSearched.slice(0, moviesCounter)}
            buttonShow={moviesSearched.length > moviesCounter}
            onClick={handleLoadMoreMovies}
          />
        )
      )}
    </>
  );
};

export default Movies;
