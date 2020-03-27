import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-authentication';
import axiosGames from '../../instances/axios-games';
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

const saveSession = (user) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            user: user
        }
    };
};
const reloadSession = (user) => {
    return {
        type: actionTypes.RELOAD,
        payload: {
            user: user
        }
    }
}
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
    var userSession = {};
    return dispatch => {
        dispatch(startLoading())
        axios.post('/accounts:signInWithPassword?key=' + API_KEY, authData)
            .then(response => {
                const userEmail = authData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;

                userSession = {
                    token,
                    userEmail,
                    localId
                };
                if (onSuccessCallback) {
                    onSuccessCallback();
                }
            })
            .catch(error => {
                dispatch(loginError());
                dispatch(endLoading());
            })
            .then(() => {
                axiosGames.get(`/users.json?orderBy="email"&equalTo="` + authData.email + `"`)
                    .then(response => {
                        console.log(response.data);
                        const info = Object.values(response.data).map((info) => {
                            return { ...info };
                        });
                        userSession = {
                            ...userSession,
                            ...info[0]
                        }
                        console.log(userSession);
                        let userSessionSave = JSON.stringify(userSession);
                        localStorage.setItem('userSession', userSessionSave);
                        dispatch(saveSession(userSession));
                        dispatch(endLoading());

                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
    }
};

export const signIn = (authData, onSuccessCallback) => {
    return dispatch => {
        let userSignIn = {
            email: authData.email,
            password: authData.password
        }
        dispatch(startLoading())
        axios.post('/accounts:signUp?key=' + API_KEY, userSignIn)
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
        let user = {
            email: authData.email,
            first: true,
            profilePic: "",
            games: [],
            userType: "normalUser"
        }
        axiosGames.post('/users.json', user)
            .then(response => {
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
            dispatch(saveSession(userSession));
        }
    }
}
export const fetchSession = (userEmail) => {
    return dispatch => {
        axiosGames.get(`/users.json?orderBy="email"&equalTo="` + userEmail + `"`)
            .then(response => {
                console.log(response.data);
                const info = Object.values(response.data).map((info) => {
                    return { ...info };
                });
                let userSession = {
                    ...info[0]
                }
                console.log(userSession);
                let userSessionSave = JSON.stringify(userSession);
                localStorage.setItem('userSession', userSessionSave);
                dispatch(reloadSession(userSession));
                dispatch(endLoading());

            })
            .catch(error => {
                console.log(error);
            })
    }
}
export const logOut = () => {
    localStorage.removeItem('userSession');

    return {
        type: actionTypes.LOG_OUT
    };
};