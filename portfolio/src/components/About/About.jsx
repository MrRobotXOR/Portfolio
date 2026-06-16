import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-left">
        <span>ABOUT ME</span>

        <h2>
          Software Engineer
          <br />
          In Progress
        </h2>
      </div>

      <div className="about-right">

        <p>
          I'm a Computer Science Engineering student with a
          passion for building modern web applications and
          transforming ideas into meaningful digital products.
          My journey began with curiosity about how software
          works and has grown into a strong interest in Full
          Stack Development, Software Engineering, and
          problem-solving through code.
        </p>

        <p>
          I enjoy creating responsive user experiences,
          developing scalable backend systems, and exploring
          new technologies that push my skills forward. From
          MERN stack projects to Data Structures & Algorithms,
          I continuously challenge myself to learn, build, and
          improve.
        </p>

        <p>
          Beyond coding, I believe in lifelong learning,
          creativity, and consistency. Every project I build
          is another step toward becoming an engineer capable
          of creating impactful solutions for real-world
          problems.
        </p>

        <div className="about-stats">

  <div className="stat-card">
    <h3>2025</h3>
    <p>Diploma Completed</p>
  </div>

  <div className="stat-card">
    <h3>Present</h3>
    <p>B.Tech CSE Student</p>
  </div>

  <div className="stat-card">
    <h3>Goal</h3>
    <p>Software Engineer</p>
  </div>

</div>

      </div>

    </section>
  );
};

export default About;