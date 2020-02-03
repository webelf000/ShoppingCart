import ShoppingCart from './component/ShoppingCart';
import { connect } from 'react-redux';
import { check, fill } from './redux/actions'

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        check : () => dispatch(check()),
        fill : () => dispatch(fill())
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

export default App;