import "./PortfolioProject.css";

const PortfolioProject = ({ url, title }) => {
  return (
    <li className="portfolio__project">
      <p className="portfolio__project-name">{title}</p>
      <a
        className="portfolio__project-arrow link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        ↗
      </a>
    </li>
  );
};

export default PortfolioProject;
