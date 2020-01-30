import React from 'react';

const item = [{itemname: "Bread", value: 30}, {itemname: "Butter", value: 40}, {itemname: "Meat", value: 50}];

class ResultRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="clearfix">
                <div className="float-left item">
                    {item[this.props.itemnum].itemname}
                </div>
                <div className="float-left item">
                    $ {item[this.props.itemnum].value}
                </div>
                <div className="float-left item">
                    {this.props.itemcount}
                </div>
                <div className="float-left item">
                    $ {item[this.props.itemnum].value * this.props.itemcount}
                </div>
            </div>
        );
    }
}

export default ResultRow;