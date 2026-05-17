import { Link } from "react-router-dom";
import "./AboutUs.css"; // optional, or use App.css

function AboutUs() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-description">
          Paradise Nursery brings lush, vibrant houseplants to your home. We
          carefully curate plants that thrive indoors, making it easy to create
          your own green oasis—no matter your experience level.
        </p>
        <Link to="/plants">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;