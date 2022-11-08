import React from "react";
import "./tab.styles.css"

import ProductCard from "../product_card/product_card.component.jsx"

const LikesTab = () => {
  return (
    <div className="LikesTab">
    {/* Likes tab content will go here */}
      <div className="tab-contents">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  );
};
export default LikesTab;