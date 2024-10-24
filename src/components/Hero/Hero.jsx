import React from "react";
import "./Hero.scss";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <h2 className="hero__new-arrivals">New Arrivals </h2>
        <div>
          <div className="hero__hand-icon">
            <p className="hero__description">new</p>
            <img
              className="hero__hand-icon--image"
              src={hand_icon}
              alt="handIcon"
            />
          </div>
          <p className="hero__description">Collection</p>
          <p className="hero__description">For everyone</p>
        </div>
        <div className="hero__latests-btn">
          <div>Latests Collection</div>
          <img src={arrow_icon} alt="arrowIcon" />
        </div>
      </div>
      <div className="hero__right">
        <img src={hero_image} alt="heroImage" />
      </div>
    </div>
  );
}

export default Hero;
