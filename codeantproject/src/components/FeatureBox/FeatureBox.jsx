import LowerRightCard from "./LowerRightCard";
import UpperLeftCard from "./UpperLeftCard";
import "./FeatureBox.css";

const FeatureBox = () => {
  return (
    <>
      <div className="feature-box">
        <UpperLeftCard />
        <LowerRightCard />
      </div>
    </>
  );
};

export default FeatureBox;
