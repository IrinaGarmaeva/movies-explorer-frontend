import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import './Logo.css'

const Logo = ({}) => {
  return (
    <Link to="/">
      <img src={logo} alt="Логотип" className="logo"/>
    </Link>
  );
};

export default Logo;
