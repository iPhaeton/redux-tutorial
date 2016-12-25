import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";

import postsReducer from "./posts_reducer";

const rootReducer = combineReducers({
    allPosts: postsReducer,
    form: formReducer
});

export default rootReducer;
