import { call, put } from "redux-saga/effects";
import { takeEvery } from "redux-saga";

import postRequest from "../requests/postRequest";

import {
    CREATE_POST,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERR
} from "../constants";

function* CreatePost (action) {
    try {
        let response = yield postRequest(action.payload.requestUrl, action.payload.body);
        yield put({type: CREATE_POST_SUCCESS, payload: response});
    } catch (err) {
        console.log(err);
    };
};

export default function* createPostSaga () {
    yield takeEvery(CREATE_POST, CreatePost);
};