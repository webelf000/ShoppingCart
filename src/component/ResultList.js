import React from 'react';
import ResultRow from './ResultRow';
import '../index.css';

const item = [{itemname: "Bread", value: 30}, {itemname: "Butter", value: 40}, {itemname: "Meat", value: 50}];

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

function Repeat(props) {
    let items = [];

    items = item.map((itemset, idx) => props.result[idx].itemcount > 0 && <ResultRow key={idx} itemnum={idx} itemcount={props.result[idx].itemcount} />);

    return <div>{items}</div>;
}

export default ResultList;