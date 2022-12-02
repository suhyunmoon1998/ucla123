import React, { useState } from 'react'
import axios from "axios";
import useUserContext from "../../context/user.context";
import "./tab.styles.css"

import ProductCard from "../product_card/product_card.component.jsx"

const LikesTab = () => {
  const [likedProducts, setLikedProducts] = useState([])
  const { username } = useUserContext();
  
  const getLikedProducts = async() =>{
    await axios
      .get('http://localhost:4000/app/users/' + username)
      .then(response => {
        if (response.data && response.data[0]) {
          setLikedProducts(response.data[0].liked)
        }
      })
  }
  
  getLikedProducts();

  return (
    <div className="LikesTab">
    {/* Likes tab content will go here */}
      <div className="tab-contents">
        {likedProducts.map((product, index) => {
            return <ProductCard key={index} name={product.name} condition={product.condition} image_url={product.image_url} price={product.price} size={product.size}/>
        })}
      </div>
    </div>
  );
};
export default LikesTab;