import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import LoadingPage from './components/LoadingPage';
import CountryList from './components/CountryList';
import { startSetCountries } from './actions/countries';

const store = configureStore()

store.dispatch(startSetCountries());

const jsx = (
    <Provider store = { store }>
        <CountryList/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
