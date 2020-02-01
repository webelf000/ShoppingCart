import React from 'react';
import ItemRow from './ItemRow';
import { connect } from 'react-redux';
import {check, fill} from '../redux/actions'

class ItemList extends React.Component {
    render() {
        return (
            <Repeat />
        );
    }
}

class Repeat extends React.Component {
    render() {
        let items = [];
        items = this.props.itemlist.map(
            (itemset, idx) => <ItemRow key={idx} />
            );
        return <div>{items}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        check : () => dispatch(check),
        fill : () => dispatch(fill)
    }
}

ItemList = connect(mapStateToProps)(Repeat);
Repeat = connect(mapStateToProps, mapDispatchToProps)(ItemRow);

export default ItemList;