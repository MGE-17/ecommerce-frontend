import React from "react";
import "./Item.scss";

function Item(props) {
  return (
    <div className="item">
      <img className="item__image" src={props.image} alt="" />
      <p className="item__name">{props.name}</p>
      <div className="item__prices">
        <div className="item__price-new">{props.new_price}</div>
        <div className="item__price-old">{props.old_price}</div>
      </div>
    </div>
  );
}

export default Item;
