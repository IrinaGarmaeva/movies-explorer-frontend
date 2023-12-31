import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { getFromLocalStorage } from "../../utils/localStorageFunctions";
import { searchMoviesInMovies, searchShortMovies } from "../../utils/searchMovies";
import { WIDTH_1275, WIDTH_767, CARDS_12, CARDS_8, CARDS_5, CARDS_3, CARDS_2} from "../../utils/consts";


const Movies = ({ handleLike, handleDeleteLike, moviesSaved, setMoviesSaved }) => {
  const [moviesSearched, setMoviesSearched] = useState([]); // movies filtred by keywords
  const [isSearch, setIsSearch] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isValid, setIsValid] = useState(true); // state to show/hide search input error
  const [searchRequest, setSearchRequest] = useState("");
  const [isTumblerActive, setIsTumblerActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth); //TODO ДОБАВИЛА ДЛЯ ПРОВЕРКИ
  const [moviesToShow, setMoviesToShow] = useState(CARDS_12);
  const [moviesToAdd, setMoviesToAdd] = useState(CARDS_3);
  const [moviesDisplayed, setMoviesDisplayed] = useState([]);


  const location = useLocation();

  // Get and set data from local storage to show on page
  useEffect(() => {
    const searchInfo = getFromLocalStorage("search");
    const moviesSavedInfo = getFromLocalStorage("saved-movies")
    setMoviesSaved(moviesSavedInfo);

    if (searchInfo) {
      setMoviesSearched(searchInfo.resultFinal);
      setMoviesDisplayed(searchInfo.resultFinal.slice(0, moviesToShow));
      setSearchRequest(searchInfo.searchRequest);
      setIsTumblerActive(searchInfo.isTumblerActive);
      setErrorText(searchInfo.errorText);
      } else {
        setMoviesSearched([])
      }
  }, []);


  const handleResize = useCallback(() => {
      setWidth(window.innerWidth)
      if(width > WIDTH_1275) {
        setMoviesToShow(CARDS_12);
        setMoviesToAdd(CARDS_3);
      } else if(width <= WIDTH_1275 && width > WIDTH_767) {
        setMoviesToShow(CARDS_8);
        setMoviesToAdd(CARDS_2);
      } else if( width <= WIDTH_767) {
        setMoviesToShow(CARDS_5);
        setMoviesToAdd(CARDS_2);
      }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, width, moviesToShow, moviesToAdd, searchRequest])

  useEffect(() => {
    let moviesCount = CARDS_12
    let moviesMore = CARDS_3

    if(width > WIDTH_1275){
      moviesCount = CARDS_12;
      moviesMore = CARDS_3;
    } else if(width <= WIDTH_1275 && width > WIDTH_767){
      moviesCount = CARDS_8;
      moviesMore = CARDS_2;
    } else if (width <= WIDTH_767){
      moviesCount = CARDS_5;
      moviesMore = CARDS_2;
    }

    setMoviesToShow(moviesCount);
    setMoviesToAdd(moviesMore);
  }, [width, searchRequest])

  useEffect(() => {
    setMoviesDisplayed(moviesSearched.slice(0, moviesToShow))
  }, [ moviesToShow, moviesSearched, moviesToAdd, window.beforeunload ])


  const isMovieSaved = (movie, moviesSaved) => {
    return moviesSaved.find(item => item.movieId === movie.id)
  }
  // Searched movies and movies with likes
  const moviesAllAndSaved = moviesSearched.map(movie => ({
    ...movie,
    isSaved: isMovieSaved(movie, moviesSaved)
  }))

  const handleSearchMovies = (searchRequest) => {
    searchMoviesInMovies({searchRequest, setIsValid, setIsSearch, setErrorText, setMoviesSearched, isTumblerActive, setMoviesSaved})
  }

  const handleLoadMoreMovies = () => {
    setMoviesToShow(prevState => prevState + moviesToAdd)
  }

  const handleSearchShortMovies = (isTumblerActive) => {
    setIsValid(true);
    const storageSearch = getFromLocalStorage("initial-movies");

    if (!searchRequest) {
      setIsValid(false);
      return;
    }

    if(storageSearch) {
      setErrorText('')
      searchShortMovies({moviesSavedFromLocalStorage: storageSearch, isTumblerActive, searchRequest, setErrorText, errorText, location: location.pathname, setMovies: setMoviesSearched, setIsValid})
    }
  }

  return (
    <>
      <SearchForm
        searchRequest={searchRequest}
        setSearchRequest={setSearchRequest}
        onSearch={handleSearchMovies}
        isValid={isValid}
        isTumblerActive={isTumblerActive}
        setIsTumblerActive={setIsTumblerActive}
        handleTumblerClick={handleSearchShortMovies}
        isSearch={isSearch}
      />
      {errorText.length !== 0 && <div className="movies__error">{errorText}</div>}
      {isSearch ? (
        <Preloader />
      ) : (
        (moviesSearched.length !== 0 && errorText.length === 0) && (
          <MoviesCardList
            movies={moviesAllAndSaved.slice(0, moviesToShow)}
            moviesSaved={moviesSaved}
           // setMoviesSaved={setMoviesSaved}
            buttonShow={moviesAllAndSaved.length > moviesDisplayed.length}
            loadMore={handleLoadMoreMovies}
            handleLike={handleLike}
            handleDeleteLike={handleDeleteLike}
          />
        )
      )}
    </>
  );
};

export default Movies;
