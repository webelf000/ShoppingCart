import React from 'react'
import ShoppingCart from './component/ShoppingCart';
import { connect } from 'react-redux';
import { initState, check, fill } from './redux/actions'

class App extends React.Component {
    constructor(props) {
        super(props);
        initState();
    }
    render() {
        return <ShoppingCart />;
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initState : () => dispatch(initState()),
        check : () => dispatch(check()),
        fill : () => dispatch(fill())
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;