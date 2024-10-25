import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          className="item__image"
          src={props.image}
          alt=""
        />
      </Link>
      <p className="item__name">{props.name}</p>
      <div className="item__prices">
        <div className="item__price-new">{props.new_price}</div>
        <div className="item__price-old">{props.old_price}</div>
      </div>
    </div>
  );
}

export default Item;
