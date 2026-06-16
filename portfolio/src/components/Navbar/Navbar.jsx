import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <nav
      className={`navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="logo">
        Shubham
      </div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a
        href="/resume.pdf"
        className="resume-btn"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;