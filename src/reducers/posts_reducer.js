import {
    INITIAL_STATE,
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERR
} from "../constants";

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return state;
        case FETCH_POSTS_SUCCESS:
            console.log(action.payload);
            return state;
        case FETCH_POSTS_ERR:
            return state;
        default:
            return state;
    };
};