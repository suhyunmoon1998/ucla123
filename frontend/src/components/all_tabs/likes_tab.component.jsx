import React, { useState } from 'react'
import axios from "axios";
import useUserContext from "../../context/user.context";
import "./tab.styles.css"

import ProductCard from "../product_card/product_card.component.jsx"

const LikesTab = () => {
  // const liked_items = [
  //   { "url": "https://cdn.flightclub.com/750/TEMPLATE/325893/1.jpg", "price": 1300, "size": 6},
  //   { "url": "https://cdn.flightclub.com/750/TEMPLATE/299066/1.jpg", "price": 900, "size": 9},
  //   { "url": "https://cdn.flightclub.com/750/TEMPLATE/174400/1.jpg", "price": 1100, "size": 10},
  //   { "url": "https://cdn.flightclub.com/750/TEMPLATE/336354/1.jpg", "price": 800, "size": 10}
  // ]
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

  console.log(likedProducts)

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