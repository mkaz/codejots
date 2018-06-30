/* Utility functions for posts */

/* External */
import uuid from 'uuid/v1';

// massage single post
export const massagePostFromAPI = post => ( {
    key: uuid(),
    content: post.content.rendered,
    date: post.date_gmt,
    excerpt: post.excerpt,
    id: post.id,
    title: post.title.rendered,
} );

// massage post from API, remove rendered bits
export const massagePostsFromAPI = posts => {
    const newPosts = [];
    posts.forEach( post => {
        newPosts.push( massagePostFromAPI( post ) );
    } );
    return newPosts;
};

export const massagePostForAPI = post => {
    post.status = 'publish';
    return post;
};
