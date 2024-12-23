import LeftBox from "../LeftBox/LeftBox";
import RightBox from "../RightBox/RightBox";
import "./MainBox.css"

const MainBox = () => {
  return (
    <>
      <div className="main-box">
        <div className="mainbox-left">
        <LeftBox />
        </div>
        <div className="mainbox-right">
        <RightBox />
        </div>
      </div>
    </>
  );
};

export default MainBox;
