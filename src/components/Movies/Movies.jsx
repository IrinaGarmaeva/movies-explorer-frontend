import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movies from '../../utils/consts';

const Movies = () => {
  // const windowWidth = window.innerWidth
  // const width1280 = windowWidth >= 890
  // const width768 = windowWidth >= 400
  // const width320 = windowWidth < 400

  // const movies768 = movies.slice(0, 9);
  // const movies320 = movies.slice(0, 6);

  return (
    <div>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </div>
  )
}

export default Movies
