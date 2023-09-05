import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {movies} from '../../utils/consts';


const SavedMovies = () => {
  const savedMovies = movies.slice(0, 3)
  const savedMovies320 = movies.slice(0, 2)

  return (
    <section className='saved-movies'>
      <SearchForm />
      {window.innerWidth < 400 ? (
        <MoviesCardList movies={savedMovies320} />
      ) : (
        <MoviesCardList movies={savedMovies} />
      )}
    </section>
  )
}

export default SavedMovies
