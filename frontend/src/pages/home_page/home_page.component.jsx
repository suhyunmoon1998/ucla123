import React from "react";

import ProductCard from "../../components/product_card/product_card.component";

import "./home_page.styles.css";

const HomePage = () => {
  let product_list = require('./product_list.json');

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div className="products">
        {product_list.map((product) => {
            return <ProductCard image_url={product.url} price={product.price} size={product.size}/>
        })}
      </div>
    </div>
  );
};

export default HomePage;
