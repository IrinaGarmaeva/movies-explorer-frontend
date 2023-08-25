import "./PortfolioProject.css";

const PortfolioProject = ({url, title}) => {
  return (
    <li className="portfolio__project">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio__project-link"
      >
        {title}
      </a>
      <p className="portfolio__project-arrow">↗</p>
    </li>
  );
};

export default PortfolioProject;
