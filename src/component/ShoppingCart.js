import React from 'react';
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

export default ShoppingCart;