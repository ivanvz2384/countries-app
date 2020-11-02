const selector = (history, {text, sortBy}) => {
    return history.filter((h) => {
        const textMatch = h.name.toLowerCase().includes(text.toLowerCase())
        return textMatch
    }).sort((a,b) => {
        if(sortBy === 'country') {
            return a.name > b.name ? 1 : -1
        } else if(sortBy === 'countAscending') {
            return a.count > b.count ? 1 : -1
        } else if(sortBy === 'countDescending') {
            return a.count < b.count ? 1 : -1
        } else {
            return a.name > b.name ? 1 : -1
        }
    })
}

export default selector;