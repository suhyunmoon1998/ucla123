import React, { Component } from "react";
import "./add_product_page.styles.css"


class addproduct extends Component {
    constructor() {
        super();
        this.state = {
          title: "",
          description: "",
          condition: "",
          type: "",
          price: null,

        };
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changeCondition = this.changeCondition.bind(this);
        this.changeType = this.changeType.bind(this);
        this.changePrice = this.changePrice.bind(this);
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
            condition: event.target.value,
        });}
    changeType(event) {
        this.setState({
            type: event.target.value,
        });}
    changePrice(event) {
        this.setState({
            price: event.target.value,
        });}
    
    render() {
        return(
            <div className='add-product-form'>
                <h1>Upload New Product</h1> 
                {/* implement getting image here*/}
                <form className="upload-details">
                    <label className="form-headers" >Title</label>
                    <input 
                        className="add-title"
                        type="text"
                        placeholder="John Doe's Socks"
                        onChange={this.changeTitle}
                        value={this.state.title}
                    />

                    <label className="form-headers" >Description</label>
                    <span className="var-box-size">
                        <input 
                            className="add-description"
                            type="text"
                            placeholder="Maximum 250 characters"
                            onChange={this.changeDescription}
                            value={this.state.description}
                        />
                    </span>

                    <label className="form-headers" >Price</label>
                    <div className="currency-icon">
                        <i>$</i>
                        <input 
                            className="add-price"
                            type="text"
                            placeholder="420.69"
                            onChange={this.changePrice}
                            value={this.state.price}
                        />
                        
                    </div>
                    
                </form>
            </div>
        )
            
    }
}

export default addproduct;