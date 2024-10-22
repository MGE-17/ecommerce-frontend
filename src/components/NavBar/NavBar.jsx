import React from "react";
import "./NavBar.scss";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { useState } from "react";

function NavBar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="navbar__menu">
        <li
          onClick={() => setMenu("shop")}
          className={`navbar__menu-list ${
            menu === "shop" ? "navbar__menu-active" : ""
          }`}
        >
          Shop
        </li>
        <li
          onClick={() => setMenu("parts")}
          className={`navbar__menu-list ${
            menu === "parts" ? "navbar__menu-active" : ""
          }`}
        >
          Parts
        </li>
        {/* Bikes menu item */}
        <li
          onClick={() => setMenu("bikes")}
          className={`navbar__menu-list ${
            menu === "bikes" ? "navbar__menu-active" : ""
          }`}
        >
          Bikes
        </li>
        {/* Apparel menu item */}
        <li
          onClick={() => setMenu("apparel")}
          className={`navbar__menu-list ${
            menu === "apparel" ? "navbar__menu-active" : ""
          }`}
        >
          Apparel
        </li>
      </ul>
      <div className="navbar__login-cart">
        <button className="navbar__button">Login</button>
        <img src={cart_icon} alt="cart logo" />
        <div className="navbar__count">0</div>
      </div>
    </div>
  );
}

export default NavBar;
