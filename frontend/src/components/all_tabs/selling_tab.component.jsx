import React, { useState } from 'react'
import axios from "axios";
import useUserContext from "../../context/user.context";
import "./tab.styles.css"

import ProductCard from "../product_card/product_card.component.jsx"

const SellingTab = () => {
  const selling_items = [
    { "url": "https://cdn.flightclub.com/750/TEMPLATE/307016/1.jpg", "price": 700, "size": 13},
    { "url": "https://cdn.flightclub.com/750/TEMPLATE/320361/1.jpg", "price": 900, "size": 8},
    { "url": "https://cdn.flightclub.com/750/TEMPLATE/315865/1.jpg", "price": 1000, "size": 12}
  ]
  const [soldProducts, setSoldProducts] = useState([])
  const { username } = useUserContext();
  
  const getSoldProducts = async() =>{
    await axios
      .get('http://localhost:4000/app/users/' + username)
      .then(response => {
        if (response.data && response.data[0]) {
          setSoldProducts(response.data[0].forSale)
        }
      })
  }
  
  getSoldProducts();
  console.log(soldProducts)
  return (
    <div className="LikesTab">
        {/* Selling tab content will go here */}
        <div className="tab-contents">
          {soldProducts.map((product, index) => {
            return <ProductCard key={index} name={product.title} condition={product.condition} image_url={product.image} price={product.price} size={product.size}/>
          })}
        </div>
    </div>
  );
};
export default SellingTab;