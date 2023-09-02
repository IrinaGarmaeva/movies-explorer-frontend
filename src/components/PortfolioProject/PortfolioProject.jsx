import "./PortfolioProject.css";

const PortfolioProject = ({ url, title }) => {
  return (
    <a className="portfolio__project"  href={url}>
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
  );
};

export default PortfolioProject;
