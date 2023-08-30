import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <div>
      <SearchForm />
      <MoviesCardList />
    </div>
  )
}

export default Movies
