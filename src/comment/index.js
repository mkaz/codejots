/* External */
import React, { Component } from 'react';

/* Internal */
import './comments.scss';
import CommentForm from './comment-form';
import CommentList from './comment-list';

class Comment extends Component {

    constructor( props ) {
        super(props);
        this.state = {
            commentsOpen: false,
        };
    }

    toggleComment() {
        this.setState( { commentsOpen: !this.state.commentsOpen } );
    }

    render() {
        return (
            <section className="comments">
                <section className="action" onClick={ () => this.toggleComment() }>
                    <i className="fa fa-comment"></i>
                    <span> Add Comment </span>
                </section>
                { this.state.commentsOpen && <CommentList post={this.props.post} /> }
                { this.state.commentsOpen && <CommentForm post={this.props.post} /> }
            </section>
        );
    }
};

export default Comment;
