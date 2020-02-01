import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

TotalRow = connect(mapStateToProps)(TotalRow);

export default TotalRow;