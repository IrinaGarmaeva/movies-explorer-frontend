import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movies from '../../utils/consts';


const SavedMovies = () => {
  const savedMovies = movies.slice(0, 3)
  console.log(savedMovies)

  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList movies={savedMovies} />
    </section>
  )
}

export default SavedMovies
