import React from 'react';
import '../index.css';
import { connect } from 'react-redux';

class TotalRow extends React.Component {
    
    render() {
        return (
            <div className="clearfix total">
                Total : $ {this.props.total}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

TotalRow = connect(mapStateToProps)(TotalRow);

export default TotalRow;