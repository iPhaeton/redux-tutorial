import {
    FETCH_POSTS,
    CREATE_POST,
    ROOT_URL,
    API_KEY
} from "../constants";

export function fetchPostsAction() {
    const requestUrl = `${ROOT_URL}/posts${API_KEY}`;

    return {
        type: FETCH_POSTS,
        payload: requestUrl
    }
};

export function createPostAction(body) {
    const requestUrl = `${ROOT_URL}/posts${API_KEY}`;

    return {
        type: CREATE_POST,
        payload: {requestUrl, body}
    }
};