import { useState } from "react";
import "./Header.css";
import logoImage from "../../images/logo.svg";
import profileIcon from "../../images/profile.svg";
import closeIcon from "../../images/icon_close.svg";
import burgerMenuIcon from "../../images/icon_burger-menu.svg";


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="header">
      <img src={logoImage} alt="Логотип" className="header__logo" />
      {/* {toggleMenu ? (
          <img
            src={closeIcon}
            alt="Иконка закрытия меню"
            className="header__nav-menu header__close-icon"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <img
            src={burgerMenuIcon}
            alt="Иконка бургер меню"
            className="header__nav-menu header__menu-icon"
            onClick={() => setToggleMenu(true)}
          />
        )} */}
      <div className="header__nav-block ">
        {isLoggedIn ? (
          <>
            <ul className="header__nav">
              <li className="header__nav-item link">Фильмы</li>
              <li className="header__nav-item link">Сохранённые фильмы</li>
            </ul>
            <img
              src={profileIcon}
              alt="Иконка профиля"
              className="header__nav-icon link"
            />
          </>
        ) : (
          <>
            <a className="header__link link" href="https://www.youtube.com/">
              Регистрация
            </a>
            <button className="header__button">Войти</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
