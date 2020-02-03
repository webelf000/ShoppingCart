import React from 'react';
import ItemRow from './ItemRow';
import { connect } from 'react-redux';

class ItemList extends React.Component {

    render() {
        let itemlist = this.props.itemlist;
        let items = [];
        items = itemlist.map(
            (itemset, idx) => <ItemRow key={idx} itemnum={idx} />
            );
        return <div>{items}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

ItemList = connect(mapStateToProps)(ItemList);

export default ItemList;