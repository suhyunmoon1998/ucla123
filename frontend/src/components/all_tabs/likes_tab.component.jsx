import React from "react";
import "./tab.styles.css"

import ProductCard from "../product_card/product_card.component.jsx"

const LikesTab = () => {
  const liked_items = [
    { "url": "https://cdn.flightclub.com/750/TEMPLATE/325893/1.jpg", "price": 1300, "size": 6},
    { "url": "https://cdn.flightclub.com/750/TEMPLATE/299066/1.jpg", "price": 900, "size": 9},
    { "url": "https://cdn.flightclub.com/750/TEMPLATE/174400/1.jpg", "price": 1100, "size": 10},
    { "url": "https://cdn.flightclub.com/750/TEMPLATE/336354/1.jpg", "price": 800, "size": 10}
  ]
  return (
    <div className="LikesTab">
    {/* Likes tab content will go here */}
      <div className="tab-contents">
        {liked_items.map((item) => {
            return <ProductCard image_url={item.url} price={item.price} size={item.size}/>
        })}
      </div>
    </div>
  );
};
export default LikesTab;