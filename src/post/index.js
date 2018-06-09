/* External */
import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

/* Internal */
import Post from './post';

const Posts = ( { posts } ) => {
    const postsSet = posts.map( post => ( <Post key={post.key} post={post} /> ) );

    return (
        <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            { postsSet }
        </ReactCSSTransitionGroup>
    );
};

const mapStateToProps = state => ( {
    posts: state.posts,
} );

export default connect(mapStateToProps)(Posts);
