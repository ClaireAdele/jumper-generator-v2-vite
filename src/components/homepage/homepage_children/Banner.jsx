import { Link } from "react-router-dom";
import "../Homepage.css";
import "../../../App.css";
import useInView from "../../../custom-hooks/useInView";


const Banner = () => {
  const [bannerTitleRef, isVisible] = useInView();

console.log(isVisible)
  return (
      <div className="banner-img-container ">
        <h1 ref={bannerTitleRef} className={`banner-title ${isVisible ? "visible" : "" }`}>Jumper Generator</h1>
      </div>
  );
};

export default Banner;