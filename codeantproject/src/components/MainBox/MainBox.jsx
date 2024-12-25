import LeftBox from "../LeftBox/LeftBox";
import RightBox from "../RightBox/RightBox";
import "./MainBox.css"

const MainBox = () => {
  return (
    <>
      <div className="main-box">
        <LeftBox/>
        <RightBox/>
      </div>
    </>
  );
};

export default MainBox;
