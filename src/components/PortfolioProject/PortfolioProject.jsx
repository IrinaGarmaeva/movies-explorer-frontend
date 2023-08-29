import "./PortfolioProject.css";

const PortfolioProject = ({url, title}) => {
  return (
    <li className="portfolio__project link">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio__project-link"
      >
        {title}
      </a>
      <a className="portfolio__project-arrow" href={url}>↗</a>
    </li>
  );
};

export default PortfolioProject;
