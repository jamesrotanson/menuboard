const initialState = {
    count: 0
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "INCREASE_PLAN_COUNT": 
            return {
                count: state.count + 1
            };
        case "DECREASE_PLAN_COUNT": 
            return {
                count: state.count - 1
            }
        default: 
            return state;
    }
}