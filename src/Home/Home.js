import React from "react";
import "./Styles/Home.css";
import landingImg from "../Assets/Images/landing-img.svg";

const subheading =
  "Easily host and share events with your friends across any social media.";
const btnText = "🎉 Create my event";

const navigateToCreate = () => {
  window.location.href = "/create";
};

function Home() {
  return (
    <div className="container-fluid landing">
      <div className="heading">
        Imagine if <span className="landing-highlight">Snapchat </span>
        <div> had events</div>
      </div>
      <div className="subheading">{subheading}</div>
      <div>
        <img src={landingImg} alt="landing-img" className="landing-img" />
      </div>
      <div className="cta" onClick={navigateToCreate}>
        {" "}
        {btnText}
      </div>
    </div>
  );
}

export default Home;
