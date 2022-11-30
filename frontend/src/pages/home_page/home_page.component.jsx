import React from "react";

import ProductCard from "../../components/product_card/product_card.component";

import "./home_page.styles.css";

const HomePage = () => {

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div className="products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;
