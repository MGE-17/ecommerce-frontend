import React, { useContext } from "react";
import "./ProductDisplay.scss";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
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
      <div className="product-display__right">
        <h1 className="product-display__right--header">{product.name}</h1>
        <div className="product-display__right--star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display__right--prices">
          <div className="div product-display__right--price">
            ${product.new_price}
          </div>
          <div className="product-display__right--description">
            <p>Description:</p> {product.name}
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
            className="product-display__add-to-cart"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
