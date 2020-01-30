import React from 'react';
import ItemList from './ItemList';
import ResultList from './ResultList';
import TotalRow from './TotalRow';

const item = [{itemname: "Bread", value: 30}, {itemname: "Butter", value: 40}, {itemname: "Meat", value: 50}];

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);

        this.checkItem = this.checkItem.bind(this);

        this.state = {
            result : [
            {itemcount : 0, total : 0},
            {itemcount : 0, total : 0},
            {itemcount : 0, total : 0}
            ]
        };
    }

    checkItem(itemnum) {
        var tempresult;
        tempresult = this.state.result;
        tempresult[itemnum] = {
            itemcount : tempresult[itemnum].itemcount + 1,
            total : tempresult[itemnum].total + item[itemnum].value
        }
        this.setState((state) => ({result:tempresult}));
    }

    render() {
        return (
            <div>
                <h2>Shopping Cart</h2>
                <ItemList onCheck={this.checkItem} />
                <hr className="clearfix"></hr>
                <ResultList result={this.state.result} />
                <hr className="clearfix"></hr>
                <TotalRow total={this.state.result[0].total + this.state.result[1].total + this.state.result[2].total} />
            </div>
        );
    }
}

export default ShoppingCart;