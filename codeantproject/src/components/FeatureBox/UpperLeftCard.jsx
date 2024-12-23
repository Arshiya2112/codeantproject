import "./UpperLeftCard.css";
import imagelogo from "../../assets/imagelogo.png";

const UpperLeftCard = () => {
  return (
    <div className="top">
      <span className="logohead">
        <img src={imagelogo} alt="CodeAnt AI" className="logoimg" />
        <h1>AI To Detect & Autofix Bad Code</h1>
      </span>
      <hr className="breaklogo" />
      <div className="featurelist">
        <ul>
          <li>
            <span>30+</span>
            <p>Language Support</p>
          </li>
          <li>
            <span>10K+</span>
            <p>Developers</p>
          </li>
          <li>
            <span>100K+</span>
            <p>Hours Saved</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UpperLeftCard;
