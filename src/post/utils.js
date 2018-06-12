/* Utility functions for posts */

/* External */
import uuid from 'uuid/v1';

const parseTitleContent = html => {
    var title = '';
    var content = '';
    html = html.trim();
    let lines = html.split(/\r\n|\r|\n/g);
    let matches = lines[0].match(/<h1.*?>(.*)<\/h1>/);
    if ( matches ) {
        title = matches[1];
        content = lines.slice(1).join("\n");
    } else {
        console.log( html );
        title = 'Title not found';
        content = html;
    }
    return { title, content };
};

export const createPostFromMde = ( mde ) => {
    const post = { title: {}, content: {} };
    var { title, content } = parseTitleContent( mde.html );
    post.key = uuid();  // required for React
    post.title = title;
    post.content = content;
    return post;
};

// massage single post
export const massagePostFromAPI = post => ( {
    key: uuid(),
    content: post.content.rendered,
    date: post.date,
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
