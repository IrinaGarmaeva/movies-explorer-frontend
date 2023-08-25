import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__project-list">
        <li className="portfolio__project">
          <a
            href="https://github.com/IrinaGarmaeva/how-to-learn"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__project-link"
          >
            Статичный сайт
          </a>
          <p className="portfolio__project-arrow">↗</p>
        </li>
        <li className="portfolio__project">
          <a
            href="https://github.com/IrinaGarmaeva/russian-travel"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__project-link"
          >
            Адаптивный сайт
          </a>
          <p className="portfolio__project-arrow">↗</p>
        </li>
        <li className="portfolio__project">
          <a
            href="https://github.com/IrinaGarmaeva/react-mesto-api-full-gha"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__project-link"
          >
            Одностраничное приложение
          </a>
          <p className="portfolio__project-arrow">↗</p>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
