import React from 'react';

class Cart extends React.Component{

    render(){
        return(
            <div className='cart'>
                <h2>Cart Summary</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Items in Cart</th>
                            <th>Total Rs.</th>
                        </tr>            
                        <tr>
                            <td>{this.props.cartItems.length}</td>
                            <td>{this.props.totalAmount}</td>
                        </tr>    
                    </tbody>
                </table>

                <hr/>
                <table>
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Total Rs</th>
                            <th></th>
                        </tr>            
                        {
                            this.props.cartItems.map((cartItem, i) => <CustomRow key={i} item={cartItem} 
                            removeFromCartProp={this.props.removeFromCartProp}/> )
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

class CustomRow extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.quantity}</td>
                <td>{Number(this.props.item.quantity) * Number(this.props.item.price)}</td>
                <td><button className='remove' title='Remove' value={this.props.item.id}
                onClick={this.props.removeFromCartProp}>X</button></td>
            </tr>
        );
    }
}

export default Cart;