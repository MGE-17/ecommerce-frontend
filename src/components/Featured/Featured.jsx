import React, { useEffect, useState } from "react";
import "./Featured.scss";
import Item from "../Item/Item.jsx";

function Featured() {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8585/products");
        const data = await response.json();

        // Filter to get only bike products and slice the first 4
        const bikeProducts = data
          .filter((item) => item.category === "bikes")
          .slice(0, 4);
        setDataProduct(bikeProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="featured">
      <h1 className="featured__bikes">Popular in Bikes</h1>
      <div className="featured__item">
        {dataProduct.map((item, i) => {
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
