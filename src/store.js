import { createStore, compose} from 'redux';

import calculatorReducer from './reducers/calculator';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(calculatorReducer, composeEnhancers());

export default store;