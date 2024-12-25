import antonly from "../../assets/codeantonly.png";

import "./LeftBox.css";
import UpperCard from "../FeatureBox/UpperCard";
import LowerCard from "../FeatureBox/LowerCard";

const LeftBox = () => {
  return (
    <>
      <div className="left-box">
        <div className="feature-box">
          {/* <UpperCard />
          <LowerCard /> */}
          <div className="divh">
            Div
          </div>
        </div>

       
        <img className="codeant-image"  src={antonly} alt="" />
        
      </div>
    </>
  );
};

export default LeftBox;
