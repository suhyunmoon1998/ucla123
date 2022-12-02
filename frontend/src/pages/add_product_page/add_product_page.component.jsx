import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import Dropdown from "../../components/add_products/dropdown.component";

import "./add_product_page.styles.css";

const firebaseConfig = {
  apiKey: "AIzaSyD3-Q74W-2RkAR2mgkwgSNG1KFTIHIgiUo",
  authDomain: "ucla-clothing-store.firebaseapp.com",
  projectId: "ucla-clothing-store",
  storageBucket: "ucla-clothing-store.appspot.com",
  messagingSenderId: "434065109244",
  appId: "1:434065109244:web:16ebd60fcb572bee6a2779",
  measurementId: "G-LFG6ZJHRL8",
};

class addproduct extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      condition: "",
      type: "",
      price: null,
      image: null,
      displayImage: null,
      isAdded: false,
      imageUploadPercent: null,
      conditions: [
        {
          value: "New",
          label: "New",
        },
        {
          value: "Light",
          label: "Lightly Used",
        },
        {
          value: "Used",
          label: "Used",
        },
      ],
      types: [
        {
          value: "Shoes",
          label: "Shoes",
        },
        {
          value: "Shirt",
          label: "Shirt",
        },
        {
          value: "Pant",
          label: "Pant",
        },
        {
          value: "Jacket",
          label: "Jacket",
        },
      ],
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeCondition = this.changeCondition.bind(this);
    this.changeType = this.changeType.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  changeDescription(event) {
    this.setState({
      description: event.target.value,
    });
  }

  changeCondition(event) {
    this.setState({
      condition: event.value,
    });
  }

  changeType(event) {
    this.setState({
      type: event.value,
    });
  }
  changePrice(event) {
    this.setState({
      price: event.target.value,
    });
  }
  changeImage(event) {
    const file = event.target.files[0];
    if (!file) {
      alert("Please choose a file first!");
      return;
    }

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          this.setState({
            image: url,
          });
        });
      }
    );

    if (event.target.files && event.target.files[0]) {
      this.setState({
        displayImage: URL.createObjectURL(file),
      });
    }
    console.log(this.state.url);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.loggedIn === false) {
      alert("Please log in to add a product");
      return;
    }

    if (
      this.state.title === "" ||
      this.state.price === null ||
      this.state.condition === "" ||
      this.state.type === "" ||
      this.state.description === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    const userData = { username: this.props.username };
    const productData = {
      title: this.state.title,
      size: this.state.description,
      image: this.state.image,
      condition: this.state.condition,
      type: this.state.type,
      price: this.state.price,
    };

    const combined = { userData, productData };

    // pass into mongo
    axios
      .post("http://localhost:4000/app/upload", combined)
      .then((response) => {
        let addProductres = response.data;
        this.setState({ isAdded: true });
        console.log(response);
        console.log("\n");
        alert(addProductres.message);
      });

    // window.location = "/home";
    this.setState({
      //fullName: "",
      title: "",
      description: "",
      image: "",
      condition: "",
      type: "",
      price: 0,
    });
  };

  render() {
    if (this.state.isAdded) {
      return <Navigate to={{ pathname: "/profile" }} />;
    }
    return (
      <div className="add-product-form">
        <h1>Upload New Product</h1>
        <div className="upload-picture">
          <div className="form-header-picture">
            <label>Choose Picture</label>
          </div>
          <input className="image" type="file" onChange={this.changeImage} />
          <img src={this.state.displayImage} className="image" alt="" />
        </div>

        <form className="upload-product" onSubmit={this.handleSubmit}>
          <label className="form-headers">Item Name</label>
          <input
            className="add-title"
            type="text"
            placeholder="Ex. Nike Shoes"
            onChange={this.changeTitle}
            value={this.state.title}
          />

          <label className="form-headers">Size</label>
          <div className="var-box-size">
            <input
              id="id-location"
              className="add-description"
              type="text"
              placeholder="Size"
              onChange={this.changeDescription}
              value={this.state.description}
              contentEditable="true"
            />
          </div>
          <div className="drop-condition-container">
            <div className="drop-condition">
              <div className="form-headers">
                <label>Condition</label>
              </div>
              <Dropdown
                placeHolder="Select..."
                options={this.state.conditions}
                onChange={this.changeCondition}
              />
            </div>
            <div className="drop-type">
              <div className="form-headers">
                <label>Type</label>
              </div>
              <Dropdown
                placeHolder="Select..."
                options={this.state.types}
                onChange={this.changeType}
              />
            </div>
          </div>

          <label className="form-headers">Price</label>
          <div className="currency-icon">
            <i>$</i>
            <input
              className="add-price"
              type="number"
              placeholder="99.99"
              onChange={this.changePrice}
              value={this.state.price}
            />
          </div>
          <input type="submit" className="submit-button" value="Add Product" />
        </form>
      </div>
    );
  }
}

export default addproduct;
