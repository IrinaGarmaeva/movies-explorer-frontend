import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <section className="notfound">
      <div className="notfound__block">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__subtitle">Страница не найдена</p>
        <Button className={"notfound__button"} type={"button"} onClick={() => navigate(-1)} text={"Назад"} />
      </div>
    </section>
  )
}

export default NotFound
