import {createStore, combineReducers} from 'redux';
import ProductReducer from './reducers/ProductReducer';
import CartReducer from './reducers/CartReducer';

const rootReducer = combineReducers({
    ProductReducer,
    CartReducer
});
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;


