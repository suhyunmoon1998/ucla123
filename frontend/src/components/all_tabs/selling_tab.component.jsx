import React from "react";
import "./tab.styles.css"

import ProductCard from "../product_card/product_card.component.jsx"

const SellingTab = () => {
  return (
    <div className="LikesTab">
        {/* Selling tab content will go here */}
        <div className="tab-contents">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  );
};
export default SellingTab;