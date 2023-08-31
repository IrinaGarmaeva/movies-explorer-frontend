import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound__block">
        <h2 className="notfound__title">404</h2>
        <p className="notfound__subtitle">Страница не найдена</p>
        <Link to='/' className="notfound__button link">Назад</Link>
      </div>
    </div>
  )
}

export default NotFound
