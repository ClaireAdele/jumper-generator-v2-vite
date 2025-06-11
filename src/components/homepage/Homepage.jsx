import Banner from "./homepage_children/Banner"
import PatternCreationMadeEasy from "./homepage_children/PatternCreationMadeEasy";
import "./Homepage.css";
import "../../App.css";
import Faq from "./homepage_children/Faq";
import About from "./homepage_children/About"

const Homepage = () => {
    return (
      <div className="homepage">
        <Banner />
        <PatternCreationMadeEasy />
        <Faq />
        <About />
      </div>
    );
};

export default Homepage;
