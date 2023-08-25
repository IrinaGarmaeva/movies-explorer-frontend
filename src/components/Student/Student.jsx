import "./Student.css";
import studentPhoto from '../../images/student__photo.jpg';

const Student = () => {
  return (
    <section className="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__container">
        <div className="student__info">
          <h3 className="student__info-name">Ирина</h3>
          <p className="student__info-job">Frontend-разработчик, 28 лет</p>
          <p className="student__info-about">
            Мне нравится разрабатывать простые и понятные продукты, которые упрощают жизнь людей. Ранее работала в сфере автоматизации бизнеса менеджером по продажам. Закончила курс по веб-разработке. Люблю природу, прогулки на свежем воздухе, настольные игры и путешествия. За последний год посетила 7 стран.
          </p>
          <ul className="student__links">
            <li><a className="student__link" href="https://github.com/IrinaGarmaeva" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
            <li>
            <a className="student__link" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
        <img src={studentPhoto} alt="Личная фотография" className="student__photo"/>
      </div>
    </section>
  );
};

export default Student;
