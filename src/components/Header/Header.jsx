import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import closeIcon from "../../images/icon_close.svg";
import burgerMenuIcon from "../../images/icon_burger-menu.svg";

const Header = ({ isLoggedIn }) => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleOpenMobileMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.add("mobile");
    setToggleMenu(true);
  };

  const handleCloseMobileMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.remove("mobile");
    setToggleMenu(false);
  };

  return (
    <header
      className={
        location.pathname === "/"
          ? "header header_color_blue"
          : "header header_color_dark"
      }
    >
      <Logo />
      <Navigation
        isLoggedIn={isLoggedIn}
        toggleMenu={toggleMenu}
        handleCloseMobileMenu={handleCloseMobileMenu}
      />
      {isLoggedIn ? (
        <>
          {toggleMenu ? (
            <img
              src={closeIcon}
              alt="Иконка закрытия меню"
              className="nav__menu-icon nav__menu-icon_type_close"
              onClick={handleCloseMobileMenu}
            />
          ) : (
            <img
              src={burgerMenuIcon}
              alt="Иконка бургер меню"
              className="nav__menu-icon nav__menu-icon_type_burger"
              onClick={handleOpenMobileMenu}
            />
          )}
        </>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
