import React, {useState, useEffect} from "react";
import axios from "axios";
import ProductCard from "../../components/product_card/product_card.component";

import "./home_page.styles.css";
import Dropdown from "../../components/add_products/dropdown.component";

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filter, setFilter] = useState("")
  let types= [
    {
      value: "",
      label: "All",
    },
    {
      value: "shoes",
      label: "Shoes",
    },
    {
      value: "shirt",
      label: "Shirt",
    },
    {
      value: "pant",
      label: "Pant",
    },
    {
      value: "jacket",
      label: "Jacket",
    },
  ]


  useEffect(() => {
    const newFilteredProducts = products.filter((product) => {
      return product.type.toLocaleLowerCase().includes(filter)
    });
    
    setFilteredProducts(newFilteredProducts)
  }, [products, filter])

  function changeFilter (event) {
    setFilter(event.value)
  }

  const getProducts = async() =>{
    await axios
      .get('http://localhost:4000/app/products')
      .then(response => {setProducts(response.data)})
  }

  getProducts();
  
  return (
     <div className="home-page">
      <center>
        <div className="home-page-header">
          <h1>Home Page</h1>
        </div>
        <div className="filter-container" style={{ width: 250 }}>
          <Dropdown
            placeHolder="Filter by..."
            options={types}
            onChange={changeFilter}
          />
        </div>
      </center>
      <div className="products">
        {filteredProducts.map((product, index) => {
            return <ProductCard key={index} name={product.title} condition={product.condition} image_url={product.image} price={product.price} size={product.size}/>
        })}
      </div>
    </div>
  );
};

export default HomePage;
