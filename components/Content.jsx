import React from 'react';
import Products from './Products.jsx';
import Cart from './Cart.jsx';
import '../styles.css'; 

class Content extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <section className='productsContainer'>
                    <Products 
                    productList={this.props.products} 
                    cartItems={this.props.cartItems} 
                    cartItems={this.props.cartItems}
                    addToCartProp={this.props.addToCartProp}
                    removeOneFromCartProp={this.props.removeOneFromCartProp}
                    />                
                </section>
                <aside className='cartContainer'>
                    <Cart cartItems={this.props.cartItems} 
                    totalAmount={this.props.totalAmount}
                    removeFromCartProp={this.props.removeFromCartProp}/>
                </aside>
            </div>
        );
    }

}

export default Content;