import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-authentication';

const API_KEY = 'AIzaSyCzs7Ni4pV406_mpVKJaU4evPJ0HbXygXY';

const startLoading = () => {
    return {
        type: actionTypes.START_LOADING
    }
}

const endLoading = () => {
    return {
        type: actionTypes.END_LOADING
    }
}

const saveSession = (userName, token, localId) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            userName: userName,
            idToken: token,
            localId: localId
        }
    };
};

const saveSignIn = (userName, token, localId) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: {
            userName: userName,
            idToken: token,
            localId: localId
        }
    };
};
const loginError = () => {
    return {
        type: actionTypes.LOGIN_ERROR
    }
}
const signInError = () => {
    return {
        type: actionTypes.SIGN_IN_ERROR
    }
}
export const logIn = (authData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startLoading())
        axios.post('/accounts:signInWithPassword?key=' + API_KEY, authData)
            .then(response => {
                const userEmail = authData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;
                let userSession = {
                    token,
                    userEmail,
                    localId
                };

                userSession = JSON.stringify(userSession);

                console.log(response);

                localStorage.setItem('userSession', userSession);

                dispatch(saveSession(userEmail, token, localId));
                dispatch(endLoading());

                if (onSuccessCallback) {
                    onSuccessCallback();
                }
            })
            .catch(error => {
                dispatch(loginError());
                dispatch(endLoading());
            })
    }
};

export const signIn = (authData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startLoading())
        axios.post('/accounts:signUp?key=' + API_KEY, authData)
            .then(response => {
                const userEmail = authData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;

                console.log(response);

                dispatch(saveSignIn(userEmail, token, localId));
                dispatch(endLoading());

                if (onSuccessCallback) {
                    onSuccessCallback();
                }
            })
            .catch(error => {
                dispatch(signInError());
                dispatch(endLoading());
            })
    }
};

export const persistAuthentication = () => {
    return dispatch => {
        let userSession = localStorage.getItem('userSession');

        if (!userSession) {
            dispatch(logOut());
        } else {
            userSession = JSON.parse(userSession);

            dispatch(saveSignIn(userSession.userEmail, userSession.token, userSession.localId));
        }
    }
}

export const logOut = () => {
    localStorage.removeItem('userSession');

    return {
        type: actionTypes.LOG_OUT
    };
};