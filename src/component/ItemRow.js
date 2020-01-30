import React from 'react';
import '../index.css';

class ItemRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemname : props.itemname,
            value : props.value,
            leftcount : 20,
        };

        this.handleCheck = this.handleCheck.bind(this);
        this.handleFill = this.handleFill.bind(this);
    }

    handleCheck(itemnum) {
        if (this.state.leftcount > 0)
        {
            this.setState((state) => ({leftcount : state.leftcount - 1}));
            this.props.onCheck(itemnum);
        }
    }

    handleFill() {
        this.setState({leftcount : 20});
    }

    render() {
        return (
            <div className="clearfix">
                <div className="float-left item">
                    {this.props.itemname}
                </div>
                <div className="float-left item">
                    $ {this.state.value}
                </div>
                <div className="float-left item">
                    {this.state.leftcount}
                </div>
                <div className="float-left item">
                    <button onClick={() => this.handleCheck(this.props.itemnum)}>
                        Check
                    </button>
                </div>
                <div className="float-left item">
                    <button onClick={this.handleFill}>
                        Fill
                    </button>
                </div>
            </div>
        );
    }
}

export default ItemRow;