import "./Hero.css";
import { FiArrowDownRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* Left Side */}
      <div className="hero-left">

        <p className="hero-subtitle">
          Software Engineer in Progress
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
        >
          Shubham
          <br />
          Kurhade
        </motion.h1>

        <p className="hero-description">
          Computer Science student driven by curiosity,
          creativity, and code. Building modern web
          applications, solving meaningful problems,
          and growing into a software engineer.
        </p>

        
      </div>

      {/* Right Side */}
      <div className="hero-right">

        <motion.div
          className="hero-circle"
          animate={{
            y: [0, -15, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        >
          <img
            src="/images/profile.png"
            alt="Shubham Kurhade"
          />
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        Scroll ↓
      </div>

    </motion.section>
  );
};

export default Hero;