import React from "react";
import "./Offers.scss";
import exclusive_image from "../../assets/exclusive_image.png";

function Offers() {
  return (
    <div className="offers">
      <div className="offers__left">
        <h1 className="offers__exclusive">Exclusive</h1>
        <h1 className="offers_exclusive">Offers For You</h1>
        <p className="offers__best-seller">Only On Our Best Bike Gear</p>
        <button className="offers__checkbtn">Check Now</button>
      </div>
      <div className="offers__right">
        <img className="offers__image" src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
