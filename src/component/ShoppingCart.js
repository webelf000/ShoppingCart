import React from 'react';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import ResultList from './ResultList';
import TotalRow from './TotalRow';

class ShoppingCart extends React.Component {
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

ShoppingCart = connect(mapStateToProps)(TotalRow);

export default ShoppingCart;