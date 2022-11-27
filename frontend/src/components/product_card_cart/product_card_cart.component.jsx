import React from "react";

import "./product_card_cart.styles.css";

const ProductCardCart = () => {
  return (
    <div className="product-card-cart">
      <img
        src="https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_20e8a013-67c2-4e50-979f-0db09e4a54c2_540x.jpg?v=1656492920"
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
