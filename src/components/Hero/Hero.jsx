import "./Hero.css";
import heroImage from '../../images/hero_image.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          Учебный проект студента факультета<br></br>Веб-разработки.
        </h1>
        <p className="hero__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="hero__button">Узнать больше</button>
      </div>
      <img src={heroImage} alt="Логотип" className="hero__image"/>
    </section>
  );
};

export default Hero;
