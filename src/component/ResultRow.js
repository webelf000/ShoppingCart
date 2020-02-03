import React from 'react';
import { connect } from 'react-redux';

class ResultRow extends React.Component {
    render() {
        return (
            <div className="clearfix">
                <div className="float-left item">
                    {this.props.itemlist[this.props.itemnum].itemname}
                </div>
                <div className="float-left item">
                    $ {this.props.itemlist[this.props.itemnum].value}
                </div>
                <div className="float-left item">
                    {this.props.resultlist[this.props.itemnum].itemcount}
                </div>
                <div className="float-left item">
                    $ {this.props.itemlist[this.props.itemnum].value * this.props.resultlist[this.props.itemnum].itemcount}
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