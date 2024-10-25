import React, { useContext } from "react";
import "./CartItems.scss";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

function CartItems() {
  const { all_product, cartItem, removeFromCart } = useContext(ShopContext); // Fixed cartItems to cartItem

  return (
    <div className="cart-items">
      <div className="cart-items__format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          // Use cartItem here
          return (
            <div key={e.id}>
              {" "}
              {/* Added key for React */}
              <div className="cart-items__format cart-items__format-main">
                <img
                  className="cart-items__product-icon"
                  src={e.image}
                  alt=""
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-items__quantity">
                  {cartItem[e.id]} {/* Corrected access to cartItem */}
                </button>
                <p>${e.new_price * cartItem[e.id]}</p>{" "}
                {/* Fixed total price calculation */}
                <img
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="cart-items__remove-icon"
                  src={remove_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items__down">
        <div className="cart-items__total">
          <h1 className="cart-items__total-header">Cart Totals</h1>
        </div>
        <div className="cart-items__total-item">
          <p>Subtotal</p>
          <p>${0}</p>
        </div>
        <hr />
        <div className="cart-items__total-item">
          <h3>Total</h3>
          <h3>${0}</h3>
        </div>
      </div>
      <button className="cart-items__btn">Proceed to checkout</button>
    </div>
  );
}

export default CartItems;
