import React from 'react';
import Header from './Header';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';
import CountryHistoryList from './CountryHistoryList';

const CountriesDashboard = () => (
    <div className="content-container">
        <Header />
        <div className="input-group">

            <div className="input-group__item" >
                <CountryList />
            </div>

            <div className="input-group__item">
                <CountryDetail />
            </div>

            <div className="input-group__item">
                <CountryHistoryList />
            </div>
        </div>
    </div>
)

export default CountriesDashboard