/* External */
import React from 'react';
import { connect } from 'react-redux';

/* Internal */
import './post.scss';

export const Post = ( { post } ) => {
    return (
        <article>
            <h3 dangerouslySetInnerHTML={{ __html: post.title }}></h3>
            <section 
                className="content"
                dangerouslySetInnerHTML={{ __html: post.content }}></section>
        </article>
    );
};

const mapStateToProps = state => {
    return { posts: state.posts };
};

const ConnectedPosts = ( { posts } ) => {
    return (
        <div>
            { posts.map( post => ( <Post key={post.key} post={post} /> ) ) }
        </div>
    );
};

export const Posts = connect(mapStateToProps)(ConnectedPosts);
