import React from 'react';

class Header extends React.Component{

    render(){
        return(
            <header>
                <h1>Masalas & Spices ({this.props.totalsItems} items)</h1>
            </header>
        );
    } 

}

export default Header;