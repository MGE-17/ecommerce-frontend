import React from "react";
import "./Featured.scss";
import data_product from "../../assets/data.js";
import Item from "../Item/Item.jsx";

function Featured() {
  return (
    <div className="featured">
      <h1 className="featured__bikes">Popular in Bikes</h1>
      <div className="featured__item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={`$${item.new_price}`}
              old_price={`$${item.old_price}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Featured;
