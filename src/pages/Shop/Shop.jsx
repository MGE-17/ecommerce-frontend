import React from "react";
import Hero from "../../components/Hero/Hero";
import Featured from "../../components/Featured/Featured";
import Offers from "../../components/Offers/Offers";
import NewArrivals from "../../components/NewArrivals/NewArrivals";

function Shop() {
  return (
    <div>
      <Hero />
      <Featured />
      <Offers />
      <NewArrivals />
    </div>
  );
}

export default Shop;
