import React from "react";

import "./product_card.styles.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        src="https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_20e8a013-67c2-4e50-979f-0db09e4a54c2_540x.jpg?v=1656492920"
        alt=""
      />
      <div className="description">
        <div className="name_price">
          <p className="product-name">Nike Sneakers</p>
          <p className="price">$100</p>
        </div>
        <p className="condition">Condition: New</p>
        <p className="size">Size: 9</p>
      </div>
      <div className="actions"
        style={{flexDirection: "row", marginLeft:50, marginRight: 50}}>
        <button className="add-to-cart">Add to cart</button>
        <button className="like">Like</button>
      </div>
    </div>
  );
};

export default ProductCard;
