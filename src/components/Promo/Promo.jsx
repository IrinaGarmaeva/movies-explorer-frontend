import "./Promo.css";
import promoImage from '../../images/promo_image.svg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="promo__button">Узнать больше</button>
      </div>
      <img src={promoImage} alt="Логотип" className="promo__image"/>
    </section>
  );
};

export default Promo;
