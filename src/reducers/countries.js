const countriesReducerDefaultState = [];

export default (state = countriesReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_COUNTRIES': 
            return action.countries;
        default:
            return state;
    }
}