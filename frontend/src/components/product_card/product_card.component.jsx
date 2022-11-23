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
        style={{flexDirection: "row", marginLeft:50, marginRight: 50, marginBottom: 40}}>
        <button className="add-to-cart">Add to cart</button>
        <div className="like">
          <input type="checkbox" defaultChecked="checked" id="favorite" name="favorite-checkbox" defaultValue="favorite-button" />
          <label for="favorite" className="container">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            <div className="switch">
              <span className="option-1"></span>
              <span className="option-2"></span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
