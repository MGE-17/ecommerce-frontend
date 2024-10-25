import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="product">
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
    </div>
  );
}

export default Product;
