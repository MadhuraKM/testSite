import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App.jsx';
import data from './products.json';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx'


class App extends React.Component {

    constructor() {
        super();        
        //let cartItems = localStorage.getItem('cartItems') || [];
        //let totalAmount = localStorage.getItem('totalAmount') || 0;
        console.log("cartItems : " , localStorage.getItem('cartItems'));
        console.log("totalAmount : " + localStorage.getItem('totalAmount'));
       let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
       let totalAmount = localStorage.getItem('totalAmount') || 0;
        this.state = {
            products : data,
            cartItems : cartItems,
            totalAmount : totalAmount
        }

        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.removeOneFromCart = this.removeOneFromCart.bind(this);
    }

    addToCart(event) {

        let itemtoAdd = this.state.products.find((product) => { 
            return product.id == event.target.value; });
        let cartItem = this.state.cartItems.find((cartItem) => { 
            return cartItem.id == event.target.value;                
        });

        if(cartItem){
            cartItem.quantity = Number(cartItem.quantity) + 1;
            cartItem.amount = Number(cartItem.quantity) * Number(cartItem.price);
            this.setState({ cartItems: [...this.state.cartItems] });
            this.state.totalAmount = Number(this.state.totalAmount) + Number(cartItem.price);
        }else{
            // let newobj={...itemtoAdd, quantity:1};
           let newobj={};
           newobj.id = itemtoAdd.id;
           newobj.name = itemtoAdd.name;
           newobj.price = itemtoAdd.price;
           newobj.brand = itemtoAdd.brand;
           newobj.weight = itemtoAdd.weight;
           newobj.quantity = 1;
           newobj.amount = Number(newobj.quantity) * Number(newobj.price);
           this.setState({ cartItems: [...this.state.cartItems, newobj] });
           this.state.totalAmount = Number(this.state.totalAmount) + Number(newobj.price);
        }
        
        this.setState({ totalAmount: this.state.totalAmount});        

    }

    removeFromCart(e) {
       // let itemtoAdd = this.state.products.find((product) => { 
        //    return product.id == e.target.value; });
        let cartItem = this.state.cartItems.find((cartItem) => { 
            return cartItem.id == e.target.value;                
        });

        this.state.totalAmount = Number(this.state.totalAmount) - Number(cartItem.amount);
        this.setState({ totalAmount: this.state.totalAmount});
       
        let index = this.state.cartItems.indexOf(cartItem);
        this.state.cartItems.splice(index, 1);
        this.setState({ cartItems: [...this.state.cartItems] });
    }

    removeOneFromCart(e) {
        //let itemtoAdd = this.state.products.find((product) => { 
        //    return product.id == e.target.value; });
        let cartItem = this.state.cartItems.find((cartItem) => { 
            return cartItem.id == e.target.value;                
        });

        if( Number(cartItem.quantity) == 1) {

            this.state.totalAmount = Number(this.state.totalAmount) - Number(cartItem.amount);      
            let index = this.state.cartItems.indexOf(cartItem);
            this.state.cartItems.splice(index, 1);
        } else{
            this.state.totalAmount = Number(this.state.totalAmount) - Number(cartItem.price);
            cartItem.quantity = Number(cartItem.quantity) - 1; 
            cartItem.amount = Number(cartItem.quantity) * Number(cartItem.price);
        }
        this.setState({ cartItems: [...this.state.cartItems] });
        this.setState({ totalAmount: this.state.totalAmount});
    }

    render() {
       return (
          <div>
             <Header totalsItems={this.state.products.length} />

             <Content 
             products={this.state.products} 
             cartItems={this.state.cartItems} 
             totalAmount={this.state.totalAmount}
             addToCartProp={this.addToCart}
             removeFromCartProp={this.removeFromCart}
             removeOneFromCartProp={this.removeOneFromCart}
             />
          </div>
       );
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!');
        console.log("componentWillUnmount cartItemss : ", JSON.stringify( this.state.cartItems));
        localStorage.setItem('cartItems', JSON.stringify( this.state.cartItems));
        localStorage.setItem('totalAmount', this.state.totalAmount);
     }

 }

ReactDOM.render(<App />, document.getElementById('app'));