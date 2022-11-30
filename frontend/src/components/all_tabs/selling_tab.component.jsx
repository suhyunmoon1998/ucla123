import React from "react";
import "./tab.styles.css"

import ProductCard from "../product_card/product_card.component.jsx"

const SellingTab = () => {
  const selling_items = [
    { "url": "https://cdn.flightclub.com/750/TEMPLATE/307016/1.jpg", "price": 700, "size": 13},
    { "url": "https://cdn.flightclub.com/750/TEMPLATE/320361/1.jpg", "price": 900, "size": 8},
    { "url": "https://cdn.flightclub.com/750/TEMPLATE/315865/1.jpg", "price": 1000, "size": 12}
  ]
  return (
    <div className="LikesTab">
        {/* Selling tab content will go here */}
        <div className="tab-contents">
          {selling_items.map((item) => {
            return <ProductCard image_url={item.url} price={item.price} size={item.size}/>
          })}
        </div>
    </div>
  );
};
export default SellingTab;