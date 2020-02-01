import React from 'react';
import '../index.css';

class TotalRow extends React.Component {
    
    render() {
        return (
            <div className="clearfix total">
                Total : $ {this.props.total}
            </div>
        );
    }
}

export default TotalRow;