import React from 'react';

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

export default ResultRow;