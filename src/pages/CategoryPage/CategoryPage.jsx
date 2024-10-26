import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./CategoryPage.scss";
import dropdown_icon from "../../assets/dropdown_icon.png";
import Item from "../../components/Item/Item";

function CategoryPage(props) {
  const { all_product = [] } = useContext(ShopContext);

  return (
    <div className="category">
      <div className="category__index-sort">
        <p className="category__showing">
          <span className="category__showing">Showing 1-12</span> out of{" "}
          {all_product.length}
        </p>
        <div className="category__sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="category__products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default CategoryPage;
