const filtersReducerDefaultState = {
    text: '',
    sortBy: 'country'
}

const reducerFilters = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_COUNT_ASCENDING':
            return {
                ...state,
                sortBy: 'countAscending'
            }
        case 'SORT_BY_COUNT_DESCENDING':
            return {
                ...state,
                sortBy: 'countDescending'
            }
        case 'SORT_BY_COUNTRY_NAME':
            return {
                ...state,
                sortBy: 'country'
            }
        default:
            return state
    }
} 

export default reducerFilters;