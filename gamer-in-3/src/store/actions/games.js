import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-games';

const storeGames = games => {
    return {
        type: actionTypes.FETCH_GAMES,
        payload: {
            games: games
        }
    }
}
const storeGamesGroup = games => {
    return {
        type: actionTypes.FETCH_GAMES_GROUP,
        payload: {
            games: games
        }
    }
}
const startGameLoading = () => {
    return {
        type: actionTypes.START_GAME_LOADING
    }
}

const endGameLoading = () => {
    return {
        type: actionTypes.END_GAME_LOADING
    }
}

export const fetchGames = () => {
    return dispatch => {
        dispatch(startGameLoading());
        axios.get("/games.json")
            .then(response => {
                const games = Object.values(response.data).map((game) => {
                    return { ...game };
                });
                dispatch(storeGames(games))

                const pcGames = games.filter(game => game.platform === 'PC');
                const consoleGames = games.filter(game => game.platform === 'Console');

                const fetch = [pcGames, consoleGames];

                dispatch(storeGamesGroup(fetch));
                dispatch(endGameLoading());

            })
            .catch(error => {
                console.log(error);
                dispatch(endGameLoading());
            });
    }
}