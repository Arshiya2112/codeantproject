import graphimage from "../../assets/graph.png";
import "./LowerRightCard.css";

const LowerRightCard = () => {
  return (
    <>
      <div className="bottom">
        <div className="weekly-status">
          <div className="weekly-left">
            <img src={graphimage} alt="CodeAnt AI" className="graphimg" />
            <p>Issues Fixed</p>
            <h2>500K+</h2>
          </div>

          <div className="weekly-right">
            <p className="increase">
              <span className="measure">⬆ 14%</span>
            </p>
            <p className="week">This week</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowerRightCard;
