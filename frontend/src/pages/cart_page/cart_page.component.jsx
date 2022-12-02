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

  let priceTotal = 0;

  let noItemsCart = false;
  if (cartProducts.length === 0) {
    noItemsCart = true;
  }

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <div className="products-in-cart">
        {
        noItemsCart ? 
        <div className='no-items-cart'>No Items in Cart</div>
        :
        <div></div>
        }

        {cartProducts.map((product, index) => {
            priceTotal += product.price;
            return <ProductCardCart key={index} name={product.name} condition={product.condition} image_url={product.image_url} price={product.price} size={product.size}/>
        })}
      </div>
      <div className="product-cart-summary-container">
          <h2 className='product-cart-summary'>Summary</h2>
          <p className='product-cart-total-price'>Total: ${priceTotal}</p>
          <button className='product-cart-checkout' onClick={() => navigate("/checkout")}>Checkout</button>
      </div>
      
    </div>
  );
}

export default CartPage
