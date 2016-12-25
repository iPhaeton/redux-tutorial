import { call, put } from "redux-saga/effects";
import { takeEvery } from "redux-saga";

import getRequest from "../requests/getRequest";

import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERR
} from "../constants";

function* fetchPosts (action) {
    let response = yield getRequest(action.payload);
    yield put({type: FETCH_POSTS_SUCCESS, payload: response});
};

export default function* fetchPostsSaga () {
    yield takeEvery(FETCH_POSTS, fetchPosts);
};