/* External */
import React from 'react';

/* Internal */
import './post.scss';

const Post = ( { post } ) => {
    return (
        <article>
            <h3 dangerouslySetInnerHTML={{ __html: post.title }}></h3>
            <section 
                className="content"
                dangerouslySetInnerHTML={{ __html: post.content }}></section>
        </article>
    );
};

export default Post;
