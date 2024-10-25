import React from "react";
import "./ProductDisplay.scss";

function ProductDisplay(props) {
  const { product } = props;
  return (
    <div className="product-display">
      <div className="product-display__left">
        <div className="product-display__img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display__image">
          <img
            className="product-display__main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display__right"></div>
    </div>
  );
}

export default ProductDisplay;
