import ShoppingCart from './component/ShoppingCart';
import { connect } from 'react-redux';
import { initState, check, fill } from './redux/actions'

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

const App = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

export default App;