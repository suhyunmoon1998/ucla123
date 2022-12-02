import React, { Component, useEffect } from "react";
import AWS from "aws-sdk";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";

import Dropdown from "../../components/add_products/dropdown.component";

import "./add_product_page.styles.css";

AWS.config.region = "us-east-2";
const s3 = new AWS.S3({
  region: "us-east-2",
  accessKeyId: "AKIATSYGJVTKRBXSFO4S",
  secretAccessKey: "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",
});

// DOES NOT WORK
function getSignedRequest(file) {
  const s3Params = {
    Bucket: "35l",
    Key: file.name,
    Expires: 60,
    ContentType: file.type,
    ACL: "public-read",
  };

  // presigned_post = s3.generate_presigned_post(
  //   (Bucket = S3_BUCKET),
  //   (Key = file_name),
  //   (Fields = { acl: "public-read", "Content-Type": file_type }),
  //   (Conditions = [{ acl: "public-read" }, { "Content-Type": file_type }]),
  //   (ExpiresIn = 3600)
  // );

  // return json.dumps({
  //   data: presigned_post,
  //   url: "https://%s.s3.amazonaws.com/%s" % (S3_BUCKET, file_name),
  // });

  s3.createPresignedPost(s3Params, async (err, data) => {
    if (err) {
      console.log(err);
      alert("Could not complete image upload.");
    } else {
      const responseData = {
        signedRequest: data,
        url: `https://35l.s3.amazonaws.com/${file.name}`,
      };
      uploadFile(file, responseData.signedRequest, responseData.url);
      return responseData.url;
    }
  });

  return "";

  //   s3.getSignedUrl("putObject", s3Params, (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       alert("Could not get signed URL.");
  //     } else {
  //       console.log("here");
  //       console.log(data);
  //       const responseData = {
  //         signedRequest: data,
  //         url: `https://35l.s3.amazonaws.com/${file.name}`,
  //       };
  //       console.log(responseData);
  //       uploadFile(file, responseData.signedRequest, responseData.url);
  //     }
  //   });
}

async function uploadFile(file, signedRequest, url) {
  return;
  //   var postData = new FormData();
  //   for (const key in signedRequest.fields) {
  //     postData.append(key, signedRequest.fields[key]);
  //   }
  //   postData.append("file", file);

  //   await fetch(signedRequest.url, {
  //     method: "POST",
  //     headers: {
  //       "x-amz-acl": "public-read",
  //     },
  //     body: postData,
  //   })
  //     .then(() => {
  //       console.log("Done");
  //       console.log(url);
  //       return url;
  //     })
  //     .catch((error) => {
  //       alert("Could not upload file. Please try again.");
  //     });

  //   const xhr = new XMLHttpRequest();
  //   xhr.open("PUT", signedRequest);
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === 4) {
  //       if (xhr.status === 200) {
  //         console.log("File uploaded successfully");
  //       } else {
  //         alert("Could not upload file.");
  //       }
  //     }
  //   };
  //   xhr.send(file);
}

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

    const url = getSignedRequest(file); // the url will be generated, but the image generated does not work as of now

    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: url,
        displayImage: URL.createObjectURL(file),
      });
    }
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
      image: "url",
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
        console.log("\n")
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
