import React from "react";
import "./Styles/Home.css";
import landingImg from "../Assets/Images/landing-img.svg";

function Home() {
  return (
    <div className="container-fluid landing">
      <div className="heading">
        Imagine if <span className="landing-highlight">Snapchat </span>
        <div> had events</div>
      </div>
      <div className="subheading">
        Easily host and share events with your friends across any social media.
      </div>
      <div>
        <img src={landingImg} alt="landing-img" className="landing-img" />
      </div>
      <div className="cta">🎉 Create my event</div>
    </div>
  );
}

export default Home;
