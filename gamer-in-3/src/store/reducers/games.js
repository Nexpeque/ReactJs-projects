import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    games: [],
    gamesGroup: [],
    loadingGames: false
}
const fetchGames = (state, action) => {
    return updateObject(state, { games: action.payload.games })
}
const fetchGamesGroup = (state, action) => {
    return updateObject(state, { gamesGroup: action.payload.games })
}
const startLoading = (state, action) => {
    return updateObject(state, { loadingGames: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingGames: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GAMES: return fetchGames(state, action);
        case actionTypes.FETCH_GAMES_GROUP: return fetchGamesGroup(state, action);
        case actionTypes.START_GAME_LOADING: return startLoading(state, action);
        case actionTypes.END_GAME_LOADING: return endLoading(state, action);
        default: return state;
    }
}

export default reducer;