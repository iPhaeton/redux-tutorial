import React from "react"
import { Route, IndexRoute } from "react-router";

import App from "./components/App";
import BlogsIndex from "./components/BlogsIndex";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={BlogsIndex} />
    </Route>
)