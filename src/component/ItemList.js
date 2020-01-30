import React from 'react';
import ItemRow from './ItemRow';

const item = [{itemname: "Bread", value: 30}, {itemname: "Butter", value: 40}, {itemname: "Meat", value: 50}];

class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.onCheck = this.onCheck.bind(this);
    }

    onCheck(itemnum) {
        this.props.onCheck(itemnum);
    }

    render() {
        return (
            <Repeat onCheck={this.onCheck} />
        );
    }
}

class Repeat extends React.Component {
    constructor(props) {
        super(props);

        this.onCheck = this.onCheck.bind(this);
    }

    onCheck(itemnum) {
        this.props.onCheck(itemnum);
    }
    
    render() {
        let items = [];
        items = item.map((itemset, idx) => <ItemRow itemnum={idx} itemname={itemset.itemname} value={itemset.value} onCheck={this.onCheck} />);
        return <div>{items}</div>;
    }
}

export default ItemList;