import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import useUserContext from "../../context/user.context";

import "./checkout_page.styles.css";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  let navigate = useNavigate();
  let { username, loggedIn } = useUserContext();

  const handleSubmit = async () => {
    if (loggedIn === false) {
      alert("Please login to checkout");
      return;
    }

    // check if items are available
    await axios
      .get("http://localhost:4000/app/users/" + username)
      .then((response) => {
        if (response.data && response.data[0]) {
          setCartItems(response.data[0].cart);
        }
      })
      .then(() => {
        console.log("cartItems", cartItems);
      });

    await axios
      .get("http://localhost:4000/app/products")
      .then((response) => {
        if (response.data) {
          setAllItems(response.data);
        }
      })
      .then(() => {
        console.log("allItems", allItems);
      });

    let unavailableItems = [];

    for (let i = 0; i < cartItems.length; i++) {
      let matched = false;
      for (let j = 0; j < allItems.length; j++) {
        if (cartItems[i].name === allItems[j].title) {
          matched = true;
          break;
        }
      }

      if (matched === false) {
        unavailableItems.push(cartItems[i].name);
      }
    }

    if (unavailableItems.length > 0) {
      alert(
        "The following items are no longer available: " +
          unavailableItems.join()
      );
      return;
    }

    // remove cart items from cart
    await axios
      .post("http://localhost:4000/app/emptycart", { username })
      .then((response) => {
        if (response.data) {
          alert("Checked out");
        }
      });

    console.log("cartItemsUpdated: ", cartItems);
    // remove cart items from liked
    for (let i = 0; i < cartItems.length; i++) {
      await axios.post("http://localhost:4000/app/removefromliked", {
        username,
        product: cartItems[i],
      });
    }

    // remove cart items from homepage
    for (let i = 0; i < cartItems.length; i++) {
      await axios.delete("http://localhost:4000/app/removeproduct", {
        product: { title: cartItems[i].name },
      });
    }

    // redirect to home page

    // alert("submitted");
    // navigate("/home");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-form">
        <label className="checkout-headers">Name</label>
        <input className="checkout-name" id="name" placeholder="Full Name" />

        <label className="checkout-headers">Contact Information</label>
        <input
          className="checkout-contact"
          id="name"
          placeholder="Email Address"
        />

        <label className="checkout-headers">Address</label>
        <input
          className="checkout-address"
          name="name"
          id="name"
          placeholder="Street Address"
        />
        <div className="address-info">
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

        <label className="checkout-headers">Payment</label>
        <input
          className="checkout-card"
          name="name"
          id="name"
          placeholder="Card Number"
        />
        <div className="payment-info">
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
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
