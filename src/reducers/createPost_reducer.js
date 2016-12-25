import {
    INITIAL_STATE,
    CREATE_POST,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERR
} from "../constants";

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE_POST:
            return state;
        case CREATE_POST_SUCCESS:
            console.log(action.payload);
            return state;
        case CREATE_POST_ERR:
            return state;
        default:
            return state;
    };
};