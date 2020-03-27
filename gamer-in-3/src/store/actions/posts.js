import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-posts';

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

const storePost = post => {
    return {
        type: actionTypes.SAVE_POST,
        payload: {
            post: post
        }
    };
};

export const savePost = post => {
    return dispatch => {
        dispatch(startLoading());

        axios.post('/posts.json', post)
            .then(response => {
                console.log(response);

                dispatch(storePost(post));
                dispatch(endLoading());
            })
            .catch(error => {
                console.log(error);

                dispatch(endLoading());
            })
    }
};

const loadPosts = posts => {
    return {
        type: actionTypes.FETCH_POSTS,
        payload: {
            posts: posts
        }
    };
}

export const fetchPosts = () => {
    return dispatch => {
        dispatch(startLoading());

        axios.get('/posts.json')
            .then(response => {
                console.log(response);

                const posts = Object.values(response.data).map((post) => {
                    return { ...post };
                });

                dispatch(loadPosts(posts));
                dispatch(endLoading());
            })
            .catch(error => {
                console.log(error);

                dispatch(endLoading());
            })
    }
}