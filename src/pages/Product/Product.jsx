import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";

function Product() {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }
  const product = products.find((e) => e.id === Number(productId));

  return (
    <div className="product">
      {product ? (
        <>
          <Breadcrumb product={product} />
          <ProductDisplay product={product} />
        </>
      ) : (
        <div>Product not found </div>
      )}
    </div>
  );
}

export default Product;
