
import { createPostFromMde } from '../utils';

const mde1 = { html: `<h1>This is my title</h1>\n<p>Here is some content</p>` };
const mde2 = { html: `<h1 id="wtf">WTF!?</h1>\n<p>Where's the content yo?</p>` };

test( 'parses title properly', () => {
    var { title, content } = createPostFromMde( mde1 );
    expect( title ).toBe( 'This is my title' );
    expect( content ).toBe( '<p>Here is some content</p>' );
});

test( 'parses title properly with id', () => {
    var { title, content } = createPostFromMde( mde2 );
    expect( title ).toBe( 'WTF!?' );
    expect( content ).toBe( `<p>Where's the content yo?</p>` );
});
