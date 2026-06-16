import "./Skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <div className="skills-header">
        <span>TECHNICAL SKILLS</span>

        <h2>
          Technologies
          <br />
          I Work With
        </h2>

        <p>
          My toolkit as a Computer Science Engineering student,
          focused on software engineering, full stack web
          development, and problem solving.
        </p>
      </div>

      <div className="skills-grid">

        {/* Programming */}
        <motion.div
          className="skill-card"
          whileHover={{ rotate: -2, scale: 1.03 }}
        >
          <h3>Programming Languages</h3>

          <div className="skill-tags">
            <span>C++ ⭐⭐⭐⭐</span>
            <span>Java ⭐⭐</span>
            <span>JavaScript ⭐⭐⭐</span>
            <span>SQL ⭐⭐⭐</span>
          </div>
        </motion.div>

        {/* Frontend */}
        <motion.div
          className="skill-card"
          whileHover={{ rotate: 2, scale: 1.03 }}
        >
          <h3>Frontend Development</h3>

          <div className="skill-tags">
            <span>React.js</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Tailwind CSS</span>
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          className="skill-card"
          whileHover={{ rotate: -2, scale: 1.03 }}
        >
          <h3>Backend Development</h3>

          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>REST APIs</span>
            <span>Authentication</span>
          </div>
        </motion.div>

        {/* Database */}
        <motion.div
          className="skill-card"
          whileHover={{ rotate: 2, scale: 1.03 }}
        >
          <h3>Databases</h3>

          <div className="skill-tags">
            <span>MongoDB</span>
            <span>MySQL</span>
          </div>
        </motion.div>

        {/* CS Fundamentals */}
        <motion.div
          className="skill-card wide-card"
          whileHover={{ scale: 1.02 }}
        >
          <h3>Computer Science Fundamentals</h3>

          <div className="skill-tags">
            <span>Data Structures</span>
            <span>Algorithms</span>
            <span>Object Oriented Programming</span>
            <span>DBMS</span>
            <span>Operating Systems</span>
            <span>Computer Networks</span>
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          className="skill-card wide-card"
          whileHover={{ scale: 1.02 }}
        >
          <h3>Tools & Workflow</h3>

          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Postman</span>
            <span>Linux</span>
            <span>Figma</span>
          </div>
        </motion.div>

        

      </div>

    </section>
  );
};

export default Skills;