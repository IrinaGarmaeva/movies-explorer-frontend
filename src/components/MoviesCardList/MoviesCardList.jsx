import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
import './MoviesCardList.css';

const MoviesCardList = ({movies}) => {
  const windowWidth = window.innerWidth

  const condition1280 = windowWidth >= 890 && movies.length >= 12
  const condition768 = windowWidth >= 400 && movies.length >= 8
  const condition320 = windowWidth < 400 && movies.length >= 5

  return (
    <section className='cards' aria-label='Секция с карточками фильмов'>
      <div className='cards__container'>
      {movies.map((item) => {
          return <MoviesCard key={item.id} card={item} />;
        })}
      </div>
      {(condition1280 || condition768 || condition320) && (
        <Button className={'cards__button'} type={'button'} text={'Ещё'} />
      )}
    </section>
  )
}

export default MoviesCardList
