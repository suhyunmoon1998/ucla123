import React from "react";

import "./product_card_cart.styles.css";

const ProductCardCart = ({name, condition, image_url, price, size}) => {
  function removeFromCartHandler() {
    console.log("remove")
  }

  return (
    <div className="product-card-cart">
      <div className="image-cart-product-container">
        <img className="image-cart-product" src={image_url} alt="" />
      </div>
      <div className="description-product-card-cart">
        <p className="name-product-card-cart">{name}</p>
        <p className="condition-product-card-cart">Condition: {condition}</p>
        <p className="size-product-card-cart">Size: {size}</p>
      </div>
      <div className="price-quant-product-card-cart">
          <p className="price-product-card-cart">Price: ${price}</p>
          <p className="quant-product-card-cart">Quantity: 1</p>
          <p className="remove-card-cart" onClick={ removeFromCartHandler }>Remove Item</p>
      </div>
    </div>
    
  );
};

export default ProductCardCart;
