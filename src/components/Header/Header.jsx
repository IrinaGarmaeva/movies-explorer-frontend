import "./Header.css";
import logoImage from "../../images/logo.svg";
import profileIcon from "../../images/profile.svg";

// view depends on state isLoggedIn
const Header = () => {
  return (
    <header className="header">
      <img src={logoImage} alt="Логотип" className="header__logo" />
      <div className="header__nav-block">
        {/* <ul className='header__nav'>
          <li className='header__nav-item'>Фильмы</li>
          <li className='header__nav-item'>Сохранённые фильмы</li>
        </ul>
        <img src={profileIcon} alt="Иконка профиля" className='header__nav-icon' /> */}
        <a className="header__link" href="https://www.youtube.com/">
          Регистрация
        </a>
        <button className="header__button">Войти</button>
      </div>
    </header>
  );
};

export default Header;
