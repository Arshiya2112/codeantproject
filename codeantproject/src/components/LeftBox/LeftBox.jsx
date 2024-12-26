import antonly from "../../assets/codeantonly.png";
import UpperCard from "../FeatureBox/UpperCard";
import LowerCard from "../FeatureBox/LowerCard";
import "./LeftBox.css";

const LeftBox = () => {
  return (
    <>
      <div className="left-box">
        <div className="feature-box">
          <UpperCard />
          <LowerCard />
        </div>

        <img className="codeant-image" src={antonly} alt="" />
      </div>
    </>
  );
};

export default LeftBox;
