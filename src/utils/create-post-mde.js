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
        content = lines.slice(1).join('\n');
    } else {
        title = 'Title not found';
        content = html;
    }
    return { title, content };
};

export const createPostFromMde = ( mde, postId = null ) => {
    const post = { title: {}, content: {} };
    var { title, content } = parseTitleContent( mde.html );
    if ( postId ) {
        post.id = postId;
    }
    post.key = uuid();  // required for React
    post.title = title;
    post.content = content;
    return post;
};

export default createPostFromMde;
