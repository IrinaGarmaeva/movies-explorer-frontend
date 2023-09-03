import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import Button from "../Button/Button";
import profileIcon from "../../images/icon_profile.svg";

const Navigation = ({ isLoggedIn, toggleMenu, handleCloseMobileMenu }) => {
  const location = useLocation();

  return (
    <>
      {isLoggedIn ? (
        <nav className={toggleMenu ? "nav__overlay" : ""}>
          <div
            className={
              location.pathname === "/"
                ? "nav nav_type_hidden nav_color_blue"
                : "nav nav_type_hidden nav_color_dark"
            }
            id="menu"
          >
            <ul className="nav__list">
              {toggleMenu && (
                <li
                  className={
                    location.pathname === "/"
                      ? "nav__list-item nav__list-item_active link"
                      : "nav__list-item link"
                  }
                  onClick={handleCloseMobileMenu}
                >
                  <Link to="/">Главная</Link>
                </li>
              )}
              <li
                className={
                  location.pathname === "/movies"
                    ? "nav__list-item nav__list-item_active link"
                    : "nav__list-item link"
                }
                onClick={handleCloseMobileMenu}
              >
                <Link to="/movies">Фильмы</Link>
              </li>
              <li
                className={
                  location.pathname === "/saved-movies"
                    ? "nav__list-item nav__list-item_active link"
                    : "nav__list-item link"
                }
                onClick={handleCloseMobileMenu}
              >
                <Link to="/saved-movies">Сохранённые фильмы</Link>
              </li>
            </ul>
            <Link to="/profile">
              <div className="nav__account-container button">
                <p
                  className={
                    location.pathname === "/profile"
                      ? "nav__account-text nav__list-item_active"
                      : "nav__account-text"
                  }
                >
                  Аккаунт
                </p>
                <div
                  className={
                    location.pathname === "/"
                      ? "nav__account-icon-container nav__account-icon-container_color_blue"
                      : "nav__account-icon-container nav__account-icon-container_color_dark"
                  }
                >
                  <img
                    src={profileIcon}
                    alt="Иконка профиля"
                    className="nav__account-icon"
                  />
                </div>
              </div>
            </Link>
          </div>
        </nav>
      ) : (
        <>
          <nav className="nav" id="menu">
            <Link className="nav__link link" to="/signup">
              Регистрация
            </Link>
            <Link to="/signin">
              <Button
                className={"nav__button"}
                text={"Войти"}
                type={"button"}
              />
            </Link>
          </nav>
        </>
      )}
    </>
  );
};

export default Navigation;
