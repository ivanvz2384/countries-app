import {
        END_POINT_URL, 
        HEADER_VALUE_X_RAPIDAPI_HOST,
        HEADER_VALUE_X_RAPIDAPI_KEY,
        HEADER_VALUE_USE_QUERY_STRING 
    } from '../utils/utils'

export const setCountries = (countries) => ({
    type: 'SET_COUNTRIES',
    countries
});
  
export const startSetCountries = () => {
    return (dispatch) => {
        return fetch(END_POINT_URL, {
            method: 'get',
            headers: {
                'x-rapidapi-host' : HEADER_VALUE_X_RAPIDAPI_HOST,
                'x-rapidapi-key' : HEADER_VALUE_X_RAPIDAPI_KEY,
                'useQueryString' : HEADER_VALUE_USE_QUERY_STRING
            }
        })
        .then(response => response.json())
        .then( data => {
            dispatch(setCountries(data));
        });
    }
}

export const setCountry = (country) => ({
    type: 'SET_COUNTRY',
    country
});

export const startSetCountry = (alpha2Code) => {
    return (dispatch, getState) => {
        const countries = getState().countries;
        const country = countries.find(c => c.alpha2Code === alpha2Code);
        dispatch(setCountry(country));
    }
}