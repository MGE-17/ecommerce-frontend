import React from "react";
import "./NavBar.scss";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img className="navbar__image" src={logo} alt="logo" />
      </div>
      <ul className="navbar__menu">
        <li
          onClick={() => setMenu("shop")}
          className={`navbar__menu-list ${
            menu === "shop" ? "navbar__menu-active" : ""
          }`}
        >
          <Link to="/">Shop</Link>
        </li>
        <li
          onClick={() => setMenu("parts")}
          className={`navbar__menu-list ${
            menu === "parts" ? "navbar__menu-active" : ""
          }`}
        >
          <Link to="/parts">parts</Link>
        </li>
        {/* Bikes menu item */}
        <li
          onClick={() => setMenu("bikes")}
          className={`navbar__menu-list ${
            menu === "bikes" ? "navbar__menu-active" : ""
          }`}
        >
          <Link to="/bikes">Bikes</Link>
        </li>
        {/* Apparel menu item */}
        <li
          onClick={() => setMenu("apparel")}
          className={`navbar__menu-list ${
            menu === "apparel" ? "navbar__menu-active" : ""
          }`}
        >
          <Link to="/apparel">Accessories</Link>
        </li>
      </ul>
      <div className="navbar__login-cart">
        <Link to="/login">
          <button className="navbar__button">Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart logo" />
        </Link>
        <div className="navbar__count">0</div>
      </div>
    </div>
  );
}

export default NavBar;
