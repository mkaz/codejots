/* Utility functions for posts */

/* External */
import uuid from 'uuid/v1';

export const createPostFromMde = ( mde ) => {
    const post = { title: {}, content: {} };
    post.key = uuid();
    // TODO: parse title from first line
    post.title = 'Some title';
    post.content = mde.html;
    return post;
};

// massage post from API, remove rendered bits
export const massagePostsFromAPI = posts => {
    const newPosts = [];
    posts.forEach( post => {
        newPosts.push( {
            key: uuid(),
            title: post.title.rendered,
            content: post.content.rendered,
        } );
    } );
    return newPosts;
};

export const massagePostForAPI = post => {
    post.status = 'publish';
    return post;
};
