import React from "react";

import "./product_card.styles.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png"
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
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
};

export default ProductCard;
