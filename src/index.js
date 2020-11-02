import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetCountries } from './actions/countries';
// import { setCountries } from './actions/countries';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';
import AppRouter from './routers/AppRouter';

const store = configureStore()

const jsx = (
    <Provider store = { store }>
        <AppRouter/>
    </Provider>
)

let hasRendered = false

const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

store.dispatch(startSetCountries()).then(() => {
    renderApp();
});

// const countries = [];
// const mexico = {
//     name: 'Mexico',
//     alpha2Code: 'MX',
//     image: '',
//     capital: 'Ciudad de Mexico',
//     region: 'America',
//     subregion: 'Noth America',
//     languages: ['es']
// } 
// countries.push(mexico);
// const usa = {
//     name: 'United States of America',
//     alpha2Code: 'US',
//     image: '',
//     capital: 'Washington',
//     region: 'America',
//     subregion: 'Noth America',
//     languages: ['es', 'en']
// } 
// countries.push(usa);

// store.dispatch(setCountries(countries));
// renderApp();

