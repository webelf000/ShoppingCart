import React from 'react';
import { connect } from 'react-redux';
import { check, fill } from '../redux/actions';
import '../index.css';

class ItemRow extends React.Component {
    render() {
        const {check, fill} = this.props;
        return (
            <div className="clearfix">
                <div className="float-left item">
                    {this.props.itemlist[this.props.key].itemname}
                </div>
                <div className="float-left item">
                    $ {this.props.itemlist[this.props.key].value}
                </div>
                <div className="float-left item">
                    {this.props.itemlist[this.props.key].leftcount}
                </div>
                <div className="float-left item">
                    <button onClick={() => check(this.props.key)}>
                        Check
                    </button>
                </div>
                <div className="float-left item">
                    <button onClick={() => fill(this.props.key)}>
                        Fill
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        check : () => dispatch(check()),
        fill : () => dispatch(fill())
    }
}

ItemRow = connect(mapStateToProps, mapDispatchToProps)(ItemRow);

export default ItemRow;