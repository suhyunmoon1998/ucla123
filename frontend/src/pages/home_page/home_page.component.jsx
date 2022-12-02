import React, {useState} from "react";
import axios from "axios";
import ProductCard from "../../components/product_card/product_card.component";

import "./home_page.styles.css";

const HomePage = () => {
  const [products, setProducts] = useState([])

  const getProducts = async() =>{
    await axios
      .get('http://localhost:4000/app/products')
      .then(response => {setProducts(response.data)})
  }

  getProducts();
//  console.log(products)
  
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div className="products">
        {products.map((product, index) => {
            return <ProductCard key={index} name={product.title} condition={product.condition} image_url={product.image} price={product.price} size={product.size}/>
        })}
      </div>
    </div>
  );
};

export default HomePage;
