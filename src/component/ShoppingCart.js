import React from 'react';
import ItemList from './ItemList';
import ResultList from './ResultList';
import TotalRow from './TotalRow';
import { connect } from 'react-redux';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <h2>Shopping Cart</h2>
                <ItemList />
                <hr className="clearfix"></hr>
                <ResultList />
                <hr className="clearfix"></hr>
                <TotalRow />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

ShoppingCart = connect(mapStateToProps)(ShoppingCart);

export default ShoppingCart;