const countryReducerDefaultState = {};

const reducerCountry = (state = countryReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_COUNTRY': 
            return action.country;
        default:
            return state;
    }
}

export default reducerCountry;