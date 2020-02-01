import React from 'react';
import ItemRow from './ItemRow';
import { connect } from 'react-redux';

class ItemList extends React.Component {
    render() {
        return (
            <Repeat />
        );
    }
}

class Repeat extends React.Component {

    render() {
        //console.log(this.props);
        let items = [];
        items = this.props.itemlist.map(
            (itemset, idx) => <ItemRow key={idx} />
            );
        return <div>{items}</div>;
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

Repeat = connect(mapStateToProps)(Repeat);

export default ItemList;