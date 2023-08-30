
import MoviesCard from '../MoviesCard/MoviesCard';
import movies from '../../utils/consts';
import './MoviesCardList.css';

const MoviesCardList = () => {
  return (
    <section className='cards' aria-label='Секция с карточками фильмов'>
      <div className='cards__container'>
      {movies.map((item) => {
          return <MoviesCard key={item.id} card={item} />;
        })}
      </div>
      <button type='button' className='cards__button'>Ещё</button>
    </section>
  )
}

export default MoviesCardList
