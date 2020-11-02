import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import countriesReducer from '../reducers/countries';
import countryReducer from '../reducers/country';
import historyReducer from '../reducers/history';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPUSE__ || compose;

const store = () => {
    const store = createStore(
        combineReducers({
            countries: countriesReducer,
            country: countryReducer,
            history: historyReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store;
}

export default store;
