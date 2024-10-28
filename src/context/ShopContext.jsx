import React, { createContext, useEffect, useState } from "react";
//import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  let cart = {};
  products.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItems] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8585/products");
        const data = await response.json();
        setProducts(data);
        setCartItems(getDefaultCart(data));
      } catch (error) {
        console.error("Filed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItem) {
      const product = products.find((p) => p.id === Number(itemId));
      if (product && cartItem[itemId] > 0) {
        totalAmount += product.new_price * cartItem[itemId];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    products,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
