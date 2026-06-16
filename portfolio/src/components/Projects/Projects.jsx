import "./Projects.css";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section className="projects" id="projects">

      <div className="projects-header">

        <span>MY Projects</span>

        <h2>
          Things I've
          <br />
          Built & Learned
        </h2>

        <p>
          A collection of projects that reflect my journey in
          Software Engineering, Web Development, Mobile App
          Development, and Computer Networking.
        </p>

      </div>

      <div className="projects-list">

        {projects.map((project, index) => (

          <div
            key={project.id}
            className={`project-row ${
              index % 2 === 1 ? "reverse" : ""
            }`}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-info">

              <span className="project-number">
                0{project.id}
              </span>

              <div className="project-status">
                Academic Project
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech}
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;