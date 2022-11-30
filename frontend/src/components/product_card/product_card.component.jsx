import React, {useState} from "react";

import "./product_card.styles.css";

const ProductCard = () => {
  const [btnClass, setBtnClass] = useState(false);
  const image_source = [
    "https://cdn.flightclub.com/750/TEMPLATE/325893/1.jpg",
    "https://cdn.flightclub.com/750/TEMPLATE/299066/1.jpg",
    "https://cdn.flightclub.com/750/TEMPLATE/174400/1.jpg",
    "https://cdn.flightclub.com/750/TEMPLATE/336354/1.jpg",
    "https://cdn.flightclub.com/750/TEMPLATE/307016/1.jpg",
    "https://cdn.flightclub.com/750/TEMPLATE/320361/1.jpg",
    "https://cdn.flightclub.com/750/TEMPLATE/315865/1.jpg",
    "https://cdn.flightclub.com/750/TEMPLATE/174409/1.jpg",
    "https://cdn.flightclub.com/750/TEMPLATE/090135/1.jpg",
    "https://cdn.flightclub.com/750/TEMPLATE/322600/1.jpg",
    "https://cdn.flightclub.com/750/TEMPLATE/275138/1.jpg",
    "https://cdn.flightclub.com/750/TEMPLATE/176533/1.jpg",
    "https://cdn.flightclub.com/750/TEMPLATE/323910/1.jpg",
  ]

  const image_generator = ( Math.floor(Math.random() * (12 - 0 + 1)) + 0)

  const size_generator = ( Math.floor(Math.random() * (15 - 7 + 1)) + 7);

  return (
    <div className="product-card">
      <img
        src= {image_source[image_generator]}
        alt=""
        height={540}
        width = {540}
      />
      <div className="description">
        <div className="name_price">
          <p className="product-name">Nike Sneakers</p>
          <p className="price">$100</p>
        </div>
        <p className="condition">Condition: New</p>
        <p className="size">{size_generator}</p>
      </div>
      <div className="actions"
        style={{flexDirection: "row", marginLeft:30, marginRight: 30, marginBottom: 20}}>
        <button className="add-to-cart">Add to cart</button>
        <button
          onClick={() => {
            btnClass ? setBtnClass(false) : setBtnClass(true);
          }}
          className="like-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className={btnClass ? "like-button-icon clicked" : "like-button-icon not-clicked"}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
