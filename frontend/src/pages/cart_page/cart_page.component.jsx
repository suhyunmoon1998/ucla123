import React from 'react'

import ProductCardCart from '../../components/product_card_cart/product_card_cart.component'

import './cart_page.styles.css'

const CartPage = () => {
    return (
      <div className="cart-page">
        <h1>Cart</h1>
        <div className="products-in-cart">
          <ProductCardCart />
          <ProductCardCart />
          <ProductCardCart />
        </div>
        <div className="product-cart-summary-container">
            <h2 className='product-cart-summary'>Summary</h2>
            <p className='product-cart-total-price'>Total: $300</p>
            <button className='product-cart-checkout'>Checkout</button>
        </div>
        
      </div>
    );
}

export default CartPage
