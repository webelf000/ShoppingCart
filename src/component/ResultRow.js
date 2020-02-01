import React from 'react';
import { connect } from 'react-redux';

class ResultRow extends React.Component {
    render() {
        return (
            <div className="clearfix">
                <div className="float-left item">
                    {this.props.itemlist[this.props.key].itemname}
                </div>
                <div className="float-left item">
                    $ {this.props.itemlist[this.props.key].value}
                </div>
                <div className="float-left item">
                    {this.props.product[this.props.key].itemcount}
                </div>
                <div className="float-left item">
                    $ {this.props.itemlist[this.props.key].value * this.props.product[this.props.key].itemcount}
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

ResultRow = connect(mapStateToProps)(ResultRow);

export default ResultRow;