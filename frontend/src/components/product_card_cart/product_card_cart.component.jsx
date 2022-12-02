import React from "react";
import axios from "axios";
import useUserContext from "../../context/user.context";

import "./product_card_cart.styles.css";

const ProductCardCart = ({ name, condition, image_url, price, size }) => {
  const { username } = useUserContext();

  function removeFromCartHandler() {
    console.log("in handler");

    const productData = { name, condition, image_url, price, size };
    const combinedData = { username, productData };

    axios
      .post("http://localhost:4000/app/removefromcart", combinedData)
      .then((response) => {
        console.log(response);
        const data = response.data;

        if (data.status === 0) {
          alert(data.message);
          return;
        }
      });
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
        <p className="remove-card-cart" onClick={removeFromCartHandler}>
          Remove Item
        </p>
      </div>
    </div>
  );
};

export default ProductCardCart;
