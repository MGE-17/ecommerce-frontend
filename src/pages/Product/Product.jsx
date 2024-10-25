import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="product">
      <Breadcrumb product={product} />
    </div>
  );
}

export default Product;
