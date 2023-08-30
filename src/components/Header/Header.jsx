import { useState } from "react";
import "./Header.css";
import logoImage from "../../images/logo.svg";
import profileIcon from "../../images/profile.svg";
import closeIcon from "../../images/icon_close.svg";
import burgerMenuIcon from "../../images/icon_burger-menu.svg";


const Header = ({isLoggedIn}) => {
  const [toggleMenu, setToggleMenu] = useState(false);


  const handleClick = () => {
    const menu = document.getElementById('menu')
    // const menu = document.getElementsByClassName('header__nav-block')
    console.log(menu)
    menu.classList.add('mobile')
    setToggleMenu(true)
  }

  return (
    <header className={isLoggedIn ? 'header header_color_dark' : 'header header_color_blue'} >
      <img src={logoImage} alt="Логотип" className="header__logo" />
        {isLoggedIn ? (
          <>
          <div className="header__nav-block ">
            <ul className="header__nav">
              <li className="header__nav-item link">Фильмы</li>
              <li className="header__nav-item link">Сохранённые фильмы</li>
            </ul>
            <img
              src={profileIcon}
              alt="Иконка профиля"
              className="header__nav-icon link"
            />
          </div>
          {toggleMenu ? (
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
            />
          )}
          </>
        ) : (
          <>
          <div className="header__nav-block" id="menu">
            <a className="header__link link" href="https://www.youtube.com/">
              Регистрация
            </a>
            <button className="header__button">Войти</button>
          </div>
          {toggleMenu ? (
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
          )}
          </>
        )}

    </header>
  );
};

export default Header;
