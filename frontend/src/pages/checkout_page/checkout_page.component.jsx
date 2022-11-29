import React, {useState} from 'react'

import './checkout_page.styles.css'

const CheckoutPage = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [address, setAddress] = useState("");
    // const [payment, setPayment] = useState("");

    return (
        <div className="checkout-page">
        <h1>Checkout</h1>
        <div className="checkout-form">
            <label className='checkout-headers'>Name</label>
            <input
              className="checkout-name"
              id="name"
              placeholder="Full Name"
            />

            <label className='checkout-headers'>Contact Information</label>
            <input
              className="checkout-contact"
              id="name"
              placeholder="Email Address"
            />

            <label className='checkout-headers'>Address</label>
            <input
              className="checkout-address"
              name="name"
              id="name"
              placeholder="Street Address"
            />
            <div className='address-info'>
                <input
                className="checkout-address-extra"
                name="name"
                id="name"
                placeholder="Zip Code"
                />
                <input
                className="checkout-address-extra"
                name="name"
                id="name"
                placeholder="City"
                />
                <input
                className="checkout-address-extra"
                name="name"
                id="name"
                placeholder="State"
                />
            </div>

            <label className='checkout-headers'>Payment</label>
            <input
                className="checkout-card"
                name="name"
                id="name"
                placeholder="Card Number"
                />
            <div className='payment-info'>
                <input
                className="checkout-card-extra"
                name="name"
                id="name"
                placeholder="CVV"
                />
                <input
                className="checkout-card-extra"
                name="name"
                id="name"
                placeholder="Exp. Date"
                />
            </div>
            <button className="submit-button" type="submit">Submit</button>
        </div>
      </div>
    );
}

export default CheckoutPage
