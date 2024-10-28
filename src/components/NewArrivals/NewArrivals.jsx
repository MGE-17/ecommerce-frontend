import React, { useState, useEffect } from "react";
import "./NewArrivals.scss";
import Item from "../Item/Item";

function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8585/products");
        const data = await response.json();
        const idsToShow = [12, 14, 8, 15, 2, 17, 28, 10];

        // Filter the fetched data to include only the specified IDs
        const filteredData = data.filter((item) => idsToShow.includes(item.id));

        setNewArrivals(filteredData);
      } catch (error) {
        console.error("Failed to fetch new collections:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="arrivals">
      <h1 className="arrivals__header">NEW ARRIVALS</h1>
      <div className="arrivals__collections">
        {newArrivals.map((item, i) => {
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

export default NewArrivals;
