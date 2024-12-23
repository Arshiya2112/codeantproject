import FeatureBox from "../FeatureBox/FeatureBox";
import CodeAntImage from "./CodeAntImage"
import "./LeftBox.css";
const LeftBox = () => {
  return (
    <>
      <div className="left-box">
        <FeatureBox />
        <CodeAntImage/>
      </div>
    </>
  );
};

export default LeftBox;
