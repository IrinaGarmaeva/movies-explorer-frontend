import "./PortfolioProject.css";

const PortfolioProject = ({ url, title }) => {
  return (
    <li className="portfolio__project">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="portfolio__project-name">{title}</h2>
        <p
          className="portfolio__project-arrow link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          ↗
        </p>
      </a>
    </li>
  );
};

export default PortfolioProject;
