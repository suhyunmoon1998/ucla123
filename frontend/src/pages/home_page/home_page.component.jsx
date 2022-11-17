import React, { useEffect } from "react";

import ProductCard from "../../components/product_card/product_card.component";
import { run } from "../../services/mongo";

import "./home_page.styles.css";

const HomePage = () => {
  useEffect(() => {
    run();
  }, []);

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div className="products">
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
