import "./AboutMe.css";
import aboutMePhoto from "../../images/aboutMe__photo.jpg";

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__container">
        <div className="aboutMe__info">
          <h3 className="aboutMe__info-name">Ирина</h3>
          <p className="aboutMe__info-job">Frontend-разработчик, 28 лет</p>
          <p className="aboutMe__info-about">
            Мне нравится разрабатывать простые и понятные продукты, которые
            упрощают жизнь людей. Ранее работала в сфере автоматизации бизнеса. Закончила курс по веб-разработке. Люблю
            природу, прогулки на свежем воздухе, настольные игры и путешествия.
            За последний год посетила 7 стран.
          </p>
          <ul className="aboutMe__links">
            <li>
              <a
                className="aboutMe__link link"
                href="https://github.com/IrinaGarmaeva"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="aboutMe__link link"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <img
          src={aboutMePhoto}
          alt="Личная фотография"
          className="aboutMe__photo"
        />
      </div>
    </section>
  );
};

export default AboutMe;
