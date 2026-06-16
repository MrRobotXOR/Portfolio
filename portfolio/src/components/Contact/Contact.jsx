import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <span>GET IN TOUCH</span>

      <h2>
        Let's Build
        <br />
        Something Amazing
      </h2>

      <p>
        I'm always open to discussing new projects,
        opportunities and collaborations.
      </p>

      <div className="contact-links">

        <a href="mailto:shubhamkurhade794@gmail.com">
          Email Me
        </a>

        <a
          href="https://github.com/MrRobotXOR"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shubham-kurhade-040a07339/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </div>

    </section>
  );
};

export default Contact;