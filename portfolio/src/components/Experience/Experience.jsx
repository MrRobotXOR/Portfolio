import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">

      <div className="experience-header">
        <span>MY JOURNEY</span>

        <h2>
          From Curiosity
          <br />
          To Creation
        </h2>
      </div>

      <div className="timeline">

        <div className="timeline-item">

          <div className="year">2021-2022</div>

          <div className="content">
            <h3>Secondary School (10th)</h3>

            <p>
              Successfully completed my Secondary Education
              with <strong>88%</strong>, building a strong
              academic foundation and developing a growing
              interest in technology and computers.
            </p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="year">2022-2025</div>

          <div className="content">
            <h3>Diploma in Information Technology</h3>

            <p>
              Completed Diploma in Information Technology
              with <strong>79.31%</strong>. During this
              period, I explored programming, networking,
              databases, and software development while
              strengthening my technical fundamentals.
            </p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="year">2024</div>

          <div className="content">
            <h3>Android App Development Internship</h3>

            <p>
              Worked on Android application development using
              Android Studio. Gained practical experience in
              mobile app design, user interfaces, debugging,
              and real-world development workflows.
            </p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="year">2025-Present</div>

          <div className="content">
            <h3>B.Tech Computer Science Engineering</h3>

            <p>
              Currently pursuing B.Tech in Computer Science
              Engineering with an <strong>8.7 CGPA</strong>.
              Actively focused on Software Engineering,
              Data Structures & Algorithms, and Full Stack
              Web Development.
            </p>

          </div>

        </div>

        </div>

    </section>
  );
};

export default Experience;