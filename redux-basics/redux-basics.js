const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//REDUCER
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === 'ADD_TO_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.payload.value
        }
    }

    return state;
}

//STORE
const store = createStore(rootReducer);

console.log('Store: ', store.getState());

//SUBSCRIPTION
store.subscribe(() => {
    console.log('[Subscription]: ', store.getState());
});

//ACTIONS DISPATCHER
store.dispatch({
    type: 'INCREMENT_COUNTER'
});
store.dispatch({
    type: 'ADD_TO_COUNTER',
    payload: {
        value: 10
    }
});

console.log('Store: ', store.getState())

