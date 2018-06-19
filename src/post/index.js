/* External */
import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

/* Internal */
import Post from './post';
import Comment from '../comment';

const Posts = ( { posts, postsLabel } ) => {

    const postsSet = posts.map( post => (
        <section className="post" key={post.key}>
            <Post post={post} />
            <Comment post={post} />
        </section>
    ) );

    return (
        <section className="articles">
            <h5 className="posts-label">{ postsLabel }</h5>
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                { postsSet }
            </ReactCSSTransitionGroup>
        </section>
    );
};

const mapStateToProps = state => ( {
    posts: state.posts,
    postsLabel: state.postsLabel,
} );

export default connect(mapStateToProps)(Posts);
