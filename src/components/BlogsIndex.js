import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import { fetchPostsAction } from "../actions";

class BlogsIndex extends Component {
    componentWillMount () {
        this.props.fetchPostsAction();
    }

    render () {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary" onClick={() => {
                        this.props.fetchPostsAction();
                    }}>
                        Add a post
                    </Link>
                </div>
                List of blogs
            </div>
        )
    }
};

export default connect (null, {fetchPostsAction})(BlogsIndex);