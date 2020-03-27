import * as actionTypes from './actionsTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

const addResult = ( value ) => {
    return {
        type: actionTypes.ADD,
        payload: {
            value: value
        }
    }
}

export const add = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addResult(value))
        }, 2000);
    }
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        payload: {
            value: value
        }
    };
};