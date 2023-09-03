import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="notfound__block">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__subtitle">Страница не найдена</p>
        <Link to='/' className="notfound__button link">Назад</Link>
      </div>
    </section>
  )
}

export default NotFound
