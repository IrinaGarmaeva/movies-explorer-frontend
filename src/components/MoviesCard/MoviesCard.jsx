import './MoviesCard.css';

const MoviesCard = ({card}) => {
  const hours = Math.floor(card.duration/60)
  const minutes = card.duration - hours*60
  const baseUrl = ' https://api.nomoreparties.co'


  return (
    <div className='card'>
      <div className='card__header'>
        <p className='card__title'>{card.nameRU}</p>
        <p className='card__duration'>{`${hours}ч ${minutes}м`}</p>
      </div>
      <img className='card__image' src={`${baseUrl}/${card.image.url}`} alt="Постер фильма" />
      <button type='button' className='card__button card__button_type_add'>Сохранить</button>
      {/* <button type='button' className='card__button card__button_type_saved'>&#10003;</button> */}
      {/* <button type='button' className='card__button card__button_type_delete'>&#10006;</button> */}
    </div>
  )
}

export default MoviesCard



