import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { check, fill} from '../redux/actions';

class ItemRow extends React.Component {
    render() {
        const {check, fill} = this.props;
        return (
            <div className="clearfix">
                <div className="float-left item">
                    {this.props.itemlist[this.props.itemnum].itemname}
                </div>
                <div className="float-left item">
                    $ {this.props.itemlist[this.props.itemnum].value}
                </div>
                <div className="float-left item">
                    {this.props.itemlist[this.props.itemnum].leftcount}
                </div>
                <div className="float-left item">
                    <button onClick={() => check(this.props.itemnum)}>
                        Check
                    </button>
                </div>
                <div className="float-left item">
                    <button onClick={() => fill(this.props.itemnum)}>
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
        check : (itemnum) => { dispatch(check(itemnum))},
        fill : (itemnum) => { dispatch(fill(itemnum))}
    }
}

ItemRow = connect(mapStateToProps, mapDispatchToProps)(ItemRow);

export default ItemRow;