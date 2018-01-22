import React from 'react';

class Product extends React.Component{

    constructor(props) {
        super(props);

        let cartItem = this.props.cartItems.find((cartItem) => { 
            return cartItem.id == this.props.productDetails.id;                
        });

        this.state={
            itemsAdded : cartItem ? Number(cartItem.quantity) : 0
        }

        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    addProduct(e) {
        let itemsTotal = Number(this.state.itemsAdded) + 1;
        this.setState( 
            {itemsAdded : itemsTotal}
        );
        
        this.props.addToCartProp(e);
    }

    removeProduct(e) {
        let itemsReduceTotal = Number(this.state.itemsAdded) - 1;
        this.setState( 
            {itemsAdded : itemsReduceTotal}
        );
        
        this.props.removeOneFromCartProp(e);
    }

    render(){
        return(
            <div className='product'>
                <img src={this.props.productDetails.image} />
                <div>{this.props.productDetails.brand}</div>
                <div>{this.props.productDetails.name}</div>
                <div className='weight'>{this.props.productDetails.weight}</div>
                <div className='price'>Rs. {this.props.productDetails.price}</div>

                <button value={this.props.productDetails.id} className='productBtn' 
                onClick={this.addProduct} hidden={this.state.itemsAdded}>Add To Cart</button>
                <div hidden={!this.state.itemsAdded}>
                    <button value={this.props.productDetails.id} onClick={this.removeProduct}>-</button>
                    <button> {this.state.itemsAdded} in Cart</button>
                    <button value={this.props.productDetails.id} onClick={this.addProduct}>+</button>
                </div>
            </div>
        );
    }
}

export default Product;