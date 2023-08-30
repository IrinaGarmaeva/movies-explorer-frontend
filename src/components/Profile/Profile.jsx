import './Profile.css';

const Profile = ({user}) => {
  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, {user.name}!</h2>
      <div className='profile__info-container'>
        <div className='profile__info'>
        <p className='profile__info-text'>Имя</p>
        <p className='profile__info-value'>{user.name}</p>
        </div>
        <div className='profile__info'>
        <p className='profile__info-text'>E-mail</p>
        <p className='profile__info-value'>{user.email}</p>
        </div>
      </div>
      <button className='profile__button profile__button_type_edit'>Редактировать</button>
      <button className='profile__button profile__button_type_logout'>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile
