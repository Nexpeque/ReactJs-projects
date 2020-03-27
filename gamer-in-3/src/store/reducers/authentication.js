import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isUserLoggedIn: false,
    userLoggedIn: {},
    loadingAuth: false,
    error: false,
    signInError: false
}

const login = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: action.payload.user
    });
}
const reload = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: action.payload.user
    });
}

const signIn = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const logOut = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: false,
        userLoggedIn: {}
    });
}

const startLoading = (state, action) => {
    return updateObject(state, { loadingAuth: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingAuth: false });
}
const error = (state, action) => {
    return updateObject(state, { error: true });
}
const signInError = (state, action) => {
    return updateObject(state, { signInError: true });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return login(state, action);
        case actionTypes.SIGN_IN: return signIn(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        case actionTypes.LOGIN_ERROR: return error(state, action);
        case actionTypes.SIGN_IN_ERROR: return signInError(state, action);
        case actionTypes.RELOAD: return reload(state, action);
        default: return state;
    }
}

export default reducer;