/* External */
import React from 'react';
import { connect } from 'react-redux';

/* Internal */
import Post from './post';

const Posts = ( { posts } ) => {
    return (
        <div>
            { posts.map( post => ( <Post key={post.key} post={post} /> ) ) }
        </div>
    );
};

const mapStateToProps = state => ( {
    posts: state.posts,
} );

export default connect(mapStateToProps)(Posts);
