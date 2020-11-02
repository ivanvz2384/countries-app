export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const sortByCountAscending = () => ({
    type: 'SORT_BY_COUNT_ASCENDING'
})

export const sortByCountDescending = () => ({
    type: 'SORT_BY_COUNT_DESCENDING'
})

export const sortByCountryName = () => ({
    type: 'SORT_BY_COUNTRY_NAME'
})