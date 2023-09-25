import "./Portfolio.css";
import PortfolioProject from "../PortfolioProject/PortfolioProject";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__project-list">
        <PortfolioProject url={'https://github.com/IrinaGarmaeva/how-to-learn'} title={'Статичный сайт'} />
        <PortfolioProject url={'https://github.com/IrinaGarmaeva/russian-travel'} title={'Адаптивный сайт'} />
        <PortfolioProject url={'https://github.com/IrinaGarmaeva/react-mesto-api-full-gha'} title={' Одностраничное приложение'} />
      </ul>
    </section>
  );
};

export default Portfolio;
