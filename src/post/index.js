/* External */
import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

/* Internal */
import Post from './post';
import Comment from '../comment';

const Posts = ( { posts } ) => {

    const postsSet = posts.map( post => (
        <section className="post" key={post.key}>
            <Post post={post} />
            <Comment post={post} />
        </section>
    ) );

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
