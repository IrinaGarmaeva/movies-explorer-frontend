import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';



const SavedMovies = () => {


  return (
    <section className='saved-movies'>
      <SearchForm />
      {/* {window.innerWidth < 400 ? (
        <MoviesCardList movies={savedMovies320} />
      ) : (
        <MoviesCardList movies={savedMovies} />
      )} */}
    </section>
  )
}

export default SavedMovies
