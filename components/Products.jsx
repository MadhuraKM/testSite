import React from 'react';
import Product from './Product.jsx';

class Products extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
            {
                this.props.productList.map((product, i) => <Product key = {i} productDetails = {product} 
                cartItems={this.props.cartItems} 
                addToCartProp={this.props.addToCartProp} 
                removeFromCartProp={this.props.removeFromCartProp}
                removeOneFromCartProp={this.props.removeOneFromCartProp}/>)
            }
            </div>
        );
    }

}

export default Products;