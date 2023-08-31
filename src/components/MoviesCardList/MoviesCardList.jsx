import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
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
      <Button className={'cards__button'} type={'button'} text={'Ещё'} />
    </section>
  )
}

export default MoviesCardList
