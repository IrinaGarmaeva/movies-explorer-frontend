import moviesApi from "./MoviesApi";
import mainApi from "./MainApi";
import { NOTHING_FOUND, SHORT_MOVIES_DURATION } from "./consts";
import { getFromLocalStorage, saveToLocalStorage } from "./localStorageFunctions";

export const moviesFiltredBySearchRequest = (movies, searchRequest) => {
  const request = searchRequest.toLowerCase();
  return movies.filter((movie) => {
    const nameRu = movie.nameRU.toLowerCase();
    const nameEn = movie.nameEN.toLowerCase();
    return nameRu.includes(request) || nameEn.includes(request);
  });
};

export const moviesFiltredByDuration = (movies, isTumblerActive) => {
  if (isTumblerActive) {
    return movies.filter((movie) => movie.duration <= SHORT_MOVIES_DURATION);
  } else {
    return movies;
  }
};

export const searchMoviesInMovies = async ({
  searchRequest,
  setIsValid,
  setIsSearch,
  setErrorText,
  setMoviesSearched,
  isTumblerActive,
  setMoviesSaved
}) => {
  setErrorText("");
  setIsValid(true);

  if (!searchRequest) {
    setIsValid(false);
    return;
  }

  setIsSearch(true);
  try {
    const storageSearch = getFromLocalStorage("initial-movies");

    if (storageSearch) {
      const moviesFiltredByRequest = moviesFiltredBySearchRequest(
        storageSearch,
        searchRequest.trim()
      );
      const resultFinal = moviesFiltredByDuration(
        moviesFiltredByRequest,
        isTumblerActive
      );
      resultFinal.length === 0 ? setErrorText(NOTHING_FOUND) : setErrorText("");

      saveToLocalStorage("search", {
        resultFinal,
        searchRequest,
        isTumblerActive,
        errorText: resultFinal.length === 0 ? NOTHING_FOUND : ''
      });
      setMoviesSearched(resultFinal);
    } else {
      const movies = await moviesApi.getMovies();
      const moviesLikedFromServer = await mainApi.getFavouriteMovies();
      saveToLocalStorage("initial-movies", movies);
      saveToLocalStorage("saved-movies", moviesLikedFromServer);
      setMoviesSaved(moviesLikedFromServer);

      const moviesFiltredByRequest = moviesFiltredBySearchRequest(
        movies,
        searchRequest.trim()
      );
      const resultFinal = moviesFiltredByDuration(
        moviesFiltredByRequest,
        isTumblerActive
      );
      resultFinal.length === 0 ? setErrorText(NOTHING_FOUND) : setErrorText("");
      saveToLocalStorage("search", {
        resultFinal,
        searchRequest,
        isTumblerActive,
        errorText: resultFinal.length === 0 ? NOTHING_FOUND : ''
      });
      setMoviesSearched(resultFinal);
    }
  } catch (error) {
    console.log(error);
    setErrorText(
      "Во время запроса произошла ошибка.<br>Возможно, проблема с соединением или сервер недоступен.<br>Подождите немного и попробуйте ещё раз"
    );
  } finally {
    setIsSearch(false);
  }
};

export const searchMoviesInSavedMovies = async ({
  searchRequest,
  setErrorText,
  setIsValid,
  moviesSavedFromLocalStorage,
  isTumblerActive,
  setMoviesSaved,
}) => {
  setErrorText("");
  setIsValid(true);

  if (!searchRequest) {
    setIsValid(false);
    return;
  }

  const moviesFiltredByRequest = await moviesFiltredBySearchRequest(
    moviesSavedFromLocalStorage,
    searchRequest.trim()
  );
  const resultFinal = moviesFiltredByDuration(
    moviesFiltredByRequest,
    isTumblerActive
  );
  resultFinal.length === 0 ? setErrorText(NOTHING_FOUND) : setErrorText("");
  setMoviesSaved(resultFinal);
};

export const searchShortMovies = ({
  moviesSavedFromLocalStorage,
  isTumblerActive,
  searchRequest,
  setErrorText,
  errorText,
  location,
  setMovies,
  setIsValid
}) => {
  setIsValid(true)


  const moviesFiltredByRequest = moviesFiltredBySearchRequest(
    moviesSavedFromLocalStorage,
    searchRequest.trim()
  );
  const resultFinal = moviesFiltredByDuration(
    moviesFiltredByRequest,
    isTumblerActive
  );
  resultFinal.length === 0 ? setErrorText(NOTHING_FOUND) : setErrorText("");

  location === "/movies" &&
    saveToLocalStorage("search", {
      resultFinal,
      searchRequest,
      isTumblerActive,
      errorText,
    });

  setMovies(resultFinal);
};
