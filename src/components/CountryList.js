import React from 'react';
import { connect } from 'react-redux';
import CountryListItem from './CountryListItem';

export const CountryList = (props) => (
    <div className="list-body">
        {
            props.countries.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No countries</span>
                </div>
            ) : (
                props.countries.map((country) => {
                    return <CountryListItem key={country.alpha3Code} {...country} />
                }) 
            )
        }
    </div>

);

const mapStateToProps = (state) => ({
    countries: state.countries
})

export default connect(mapStateToProps, undefined)(CountryList) 

