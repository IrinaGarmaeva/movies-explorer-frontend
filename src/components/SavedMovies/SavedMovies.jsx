import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import mainApi from '../../utils/MainApi';
import { getFromLocalStorage, saveToLocalStorage } from '../../utils/localStorageFunctions';
import { searchMoviesInSavedMovies, searchShortMovies } from '../../utils/searchMovies';

const SavedMovies = ({moviesSaved, setMoviesSaved, handleDeleteLike}) => {
const [searchRequest, setSearchRequest] = useState('');
const [isTumblerActive, setIsTumblerActive] = useState(false);
const [errorText, setErrorText] = useState('')
const [isValid, setIsValid] = useState(true);

const location = useLocation();

  useEffect(() => {
    mainApi.getFavouriteMovies()
      .then(res => {
        saveToLocalStorage('saved-movies', res);
        setMoviesSaved(res);
      })
      .catch(err => console.log(err))
  }, [setMoviesSaved])

  const moviesSavedFromLocalStorage = getFromLocalStorage('saved-movies') || []

  const handleSearchMovies = () => {
    searchMoviesInSavedMovies({ searchRequest, setErrorText, setIsValid, moviesSavedFromLocalStorage, isTumblerActive, setMoviesSaved })
  }

  const handleSearchShortMovies = (isTumblerActive) => {
    searchShortMovies({moviesSavedFromLocalStorage, isTumblerActive, searchRequest, setErrorText, errorText, location: location.pathname, setMovies: setMoviesSaved, setIsValid})
  }

  return (
    <section className='saved-movies'>
      <SearchForm searchRequest={searchRequest} setSearchRequest={setSearchRequest} onSearch={handleSearchMovies}  isValid={isValid} isTumblerActive={isTumblerActive} setIsTumblerActive={setIsTumblerActive} handleTumblerClick={handleSearchShortMovies}/>
      {errorText && <div className="movies__error">{errorText}</div>}
      <MoviesCardList moviesSaved={moviesSaved} handleDeleteLike={handleDeleteLike}/>
    </section>
  )
}

export default SavedMovies
