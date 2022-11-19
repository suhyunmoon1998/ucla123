import React from "react";

import "./product_card_cart.styles.css";

const ProductCardCart = () => {
  return (
    <div className="product-card-cart">
      <img
        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png"
        alt=""
      />
      <div className="description-product-card-cart">
        <p className="name-product-card-cart">Nike Sneakers</p>
        <p className="condition-product-card-cart">Condition: New</p>
        <p className="size-product-card-cart">Size: 9</p>
      </div>
      <div className="price-quant-product-card-cart">
          <p className="price-product-card-cart">Price: $100</p>
          <p className="quant-product-card-cart">Quantity: 1</p>
      </div>
    </div>
  );
};

export default ProductCardCart;
