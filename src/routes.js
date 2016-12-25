import React from "react"
import { Route, IndexRoute } from "react-router";

import App from "./components/App";
import BlogsIndex from "./components/BlogsIndex";
import NewPost from "./components/NewPost";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={BlogsIndex} />
        <Route path="/posts/new" component={NewPost} />
    </Route>
)