import React, { useContext } from "react";
import "./CartItems.scss";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

function CartItems() {
  const { products, cartItem, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

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
      {products.map((product) => {
        if (cartItem[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cart-items__format cart-items__format-main">
                <img
                  className="cart-items__product-icon"
                  src={product.image}
                  alt=""
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="cart-items__quantity">
                  {cartItem[product.id]}
                </button>
                <p>${product.new_price * cartItem[product.id]}</p>{" "}
                <img
                  onClick={() => {
                    removeFromCart(product.id);
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
          <div>
            <div className="cart-items__total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items__total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="cart-items__btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
