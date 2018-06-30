/* Create MDE state from Post */

/* External */
import TurndownService from 'turndown';

const options = {
    codeBlockStyle: 'fenced',
};

const createMdeFromPost = ( post ) => {
    const tds = new TurndownService( options );
    let body = `# ${post.title} \n\n`;
    body = body + tds.turndown( post.content );
    return { markdown: body };
};

export default createMdeFromPost;
