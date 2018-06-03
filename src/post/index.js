/* External */
import React from 'react';

/* Internal */
import "./post.scss";

export const Post = ( { post } ) => {
    return (
        <article>
            <h3> { post.title } </h3>
            <section className="content"> { post.content } </section>
        </article>
    );
}

export const Posts = ( { posts } ) => {
    return (
        <div>
            { posts.map( post => ( <Post key={post.id} post={post} /> ) ) }
        </div>
    );
};


