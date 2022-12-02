import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useUserContext from "../../context/user.context";
import ProductCardCart from '../../components/product_card_cart/product_card_cart.component'
import './cart_page.styles.css'

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([])
  const { username } = useUserContext();
  let navigate = useNavigate();
  // console.log(username)
  // const getCartProducts = async() =>{
  //   await axios
  //     .get('http://localhost:4000/app/users', likedObject)
  //     .then(response => {console.log(response)})
  // }

  // getCartProducts();
  const getCartProducts = async() =>{
    await axios
      .get('http://localhost:4000/app/users/' + username)
      .then(response => {
        if (response.data && response.data[0]) {
          setCartProducts(response.data[0].cart)
        }
      })
  }
  
  getCartProducts();

  // console.log(cartProducts)

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <div className="products-in-cart">
        {cartProducts.map((product, index) => {
            return <ProductCardCart key={index} name={product.name} condition={product.condition} image_url={product.image_url} price={product.price} size={product.size}/>
        })}
      </div>
      <div className="product-cart-summary-container">
          <h2 className='product-cart-summary'>Summary</h2>
          <p className='product-cart-total-price'>Total: $300</p>
          <button className='product-cart-checkout' onClick={() => navigate("/checkout")}>Checkout</button>
      </div>
      
    </div>
  );
}

export default CartPage
