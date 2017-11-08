import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import { Calculator } from './components/calculator'

const mapStateToProps = (state) => {
    return {
        display: state.display,
        expression: state.expression,
        operatorFlag: state.operatorFlag,
        resultFlag: state.resultFlag
    }
}

const mapDispachToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Calculator);

export default App;