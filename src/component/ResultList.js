import React from 'react';
import ResultRow from './ResultRow';
import {connect} from 'react-redux';
import '../index.css';

class ResultList extends React.Component {
    render() {
        return (
            <div>
                <div className="clearfix">
                    <div className="float-left item">
                        Product
                    </div>
                    <div className="float-left item">
                        Cost
                    </div>
                    <div className="float-left item">
                        Count
                    </div>
                    <div className="float-left item">
                        Total
                    </div>
                </div>
                <Repeat result={this.props.result} />
            </div>
        );
    }
}

class Repeat extends React.Component {
    render() {
        let items = [];
        items = this.props.itemlist.map(
            (itemset, idx) => this.props.resultlist[idx].leftcount > 0 &&
                <ResultRow key={idx} />
            );
        return <div>{items}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

Repeat = connect(mapStateToProps)(ResultRow);
ResultList = connect(mapStateToProps)(Repeat);

export default ResultList;