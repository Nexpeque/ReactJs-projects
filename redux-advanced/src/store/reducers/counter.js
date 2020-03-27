import * as actionTypes from '../actions/actionsTypes';
import updateObject from '../utility';

const initialState = {
    counter: 0
}

const increment = (state, action) => {
    const counter = state.counter + 1;
    return updateObject(state, {counter: counter});
}

const decrement = (state, action) => {
    const counter = state.counter - 1;
    return updateObject(state, {counter: counter});
}

const add = (state, action) => {
    const counter = state.counter + action.payload.value;
    return updateObject(state, {counter: counter});
}

const subtract = (state, action) => {
    const counter = state.counter - action.payload.value;
    return updateObject(state, {counter: counter});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT: return increment(state, action);
        case actionTypes.DECREMENT: return decrement(state, action);
        case actionTypes.ADD: return add(state, action);
        case actionTypes.SUBTRACT: return subtract(state, action);
        default: return state;
    }
}

export default reducer;