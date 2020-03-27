import * as actionType from "../actions";

const initialState = {
    counterList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SAVE:
            return {
                counterList: [
                    ...state.counterList,
                    action.payload.counterValue
                ]
            }
        default:
            return state;
    }
}


export default reducer;