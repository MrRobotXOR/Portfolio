import "./Background.css";

const Background = () => {
  return (
    <>
      <div className="bg-pattern">
        <span style={{ left: "10%", top: "90%" }}>×</span>
        <span style={{ left: "25%", top: "80%" }}>×</span>
        <span style={{ left: "45%", top: "95%" }}>×</span>
        <span style={{ left: "65%", top: "75%" }}>×</span>
        <span style={{ left: "85%", top: "90%" }}>×</span>
      </div>

      <div className="doodle-circle circle-1"></div>
      <div className="doodle-circle circle-2"></div>

      <div className="bg-name">
        SHUBHAM
      </div>
    </>
  );
};

export default Background;