import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import countriesReducer from '../reducers/countries';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPUSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            countries: countriesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store;
}
