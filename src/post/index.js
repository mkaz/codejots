/* External */
import React from 'react';

/* Internal */
import "./post.scss";

export const Post = ( { post } ) => {
    return (
        <article>
            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
            <section 
                className="content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}></section>
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


