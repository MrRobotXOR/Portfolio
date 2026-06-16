const ProjectCard = ({
  title,
  description,
  image,
  tech,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{tech}</span>
      </div>
    </div>
  );
};

export default ProjectCard;