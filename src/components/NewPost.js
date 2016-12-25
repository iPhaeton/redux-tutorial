import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createPostAction } from "../actions";

import { Field } from 'redux-form';

class NewPost extends Component {
    onSubmit (body) {
        this.props.createPostAction(body);
    }

    render () {
        const { fields: {title, categories, content},  handleSubmit } = this.props;

        console.log(this.props.createPostAction);
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>New post</h3>

                <div className="form-group">
                    <label>Title</label>
                    <Field name="title" component="input" type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <Field name="categories" component="input" type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <Field name="content" component="textarea" type="text" className="form-control"/>
                </div>

                <input type="submit" className="btn btn-primary"/>
            </form>
        )
    }
};

NewPost = reduxForm ({
    form: "NewPostForm",
    fields: ["title", "categories", "content"]
})(NewPost);

export default connect (null, {createPostAction})(NewPost);