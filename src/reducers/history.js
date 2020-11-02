const historyReducerDefaultState = [];

const reducerHistory = (state = historyReducerDefaultState, action) => {
    switch(action.type) {
        case 'UPDATE_HISTORY':
            if (!state.some(history => history.alpha2Code === action.history.alpha2Code)){
                action.history.count = 1;
                return [
                    ...state,
                    action.history
                ];
            } else{
                return state.map((history) =>{
                    if(history.alpha2Code === action.history.alpha2Code) {
                        return {
                            ...history,
                            count: history.count + 1
                        }
                    } else {
                        return history
                    }
                })
            }   
        default:
            return state;
    }
}

export default reducerHistory;