import React, { Component } from "react";
import axios from 'axios';
import "./add_product_page.styles.css"
import Dropdown from "../../components/add_products/dropdown.component";


class addproduct extends Component {
    constructor() {
        super();
        this.state = {
          title: "",
          description: "",
          condition: "hello",
          type: "",
          price: null,
          image: null,
          conditions: [
            {
                value: "new",
                label: "New"
            },
            {
                value: "light",
                label: "Lightly Used"
            },
            {
                value: "used",
                label: "Used"
            }
        ],
        types: [
            {
                value: "shirt",
                label: "Shirt"
            },
            {
                value: "pant",
                label: "Pant"
            },
            {
                value: "jacket",
                label: "Jacket"
            }
        ]
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
        });}
    changeDescription(event) {
        this.setState({
            description: event.target.value,
        });}
    changeCondition(event) {
        this.setState({
            condition: event.value,
        });}
    changeType(event) {
        this.setState({
            type: event.value,
        });}
    changePrice(event) {
        this.setState({
            price: event.target.value,
        });}
    changeImage(event) {
        if (event.target.files && event.target.files[0]) {
            this.setState({
                image: URL.createObjectURL(event.target.files[0])
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const product = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            condition: this.state.condition,
            type: this.state.type,
            price: this.state.price
        }
        // pass into mongo
        axios
            .post("http://localhost:4000/app/upload", product)
            .then((response) => console.log(response.data));
        // window.location = "/home";
        this.setState({
        //fullName: "",
        title: "",
        description: "",
        image: null,
        condition: "",
        type: "",
        price: null
    });

    }

    
    
    render() {
        return(
            <div className='add-product-form'>
                <h1>Upload New Product</h1>
                <div className="upload-picture">
                    <label className="form-headers" >Choose Picture</label>
                        <img src={this.state.image} className="image" alt=""/>
                        <input 
                            className="image"
                            type="file" 
                            onChange={this.changeImage}
                        />
                </div> 

                <form className="upload-product" onSubmit={this.handleSubmit}>  
                    <label className="form-headers" >Title</label>
                    <input 
                        className="add-title"
                        type="text"
                        placeholder="John Doe's Socks"
                        onChange={this.changeTitle}
                        value={this.state.title}
                    />

                    <label className="form-headers" >Description</label>
                    <div className="var-box-size" >
                        <input 
                            id="id-location"
                            className="add-description"
                            type="text"
                            placeholder="Maximum 250 characters"
                            onChange={this.changeDescription}
                            value={this.state.description}
                            contentEditable="true"
                        />
                    </div>
                    <div>
                        <div className="drop-condition">
                            <label className="form-headers" >Condition</label>
                            <Dropdown
                                placeHolder="Select..."
                                options={this.state.conditions}
                                onChange={this.changeCondition} 
                            />
                        </div>
                        <div className="drop-type">
                            <label className="form-headers" >Type</label>
                            <Dropdown
                                placeHolder="Select..."
                                options={this.state.types}
                                onChange={this.changeType}
                            />
                        </div>
                    </div>
                    

                    <label className="form-headers" >Price</label>
                    <div className="currency-icon">
                        <i>$</i>
                        <input 
                            className="add-price"
                            type="number"
                            placeholder="420.69"
                            onChange={this.changePrice}
                            value={this.state.price}
                        />
                    </div>
                    <input type="submit" className="submit-button" value="Add Product" />
                </form>

            </div>
        ) 
    }
}

export default addproduct;