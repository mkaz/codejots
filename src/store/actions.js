/**
 * Redux actions
 */

import { massagePostsFromAPI, massagePostForAPI } from '../post/utils';

export const savePost = post => ( 
    { 
        type: 'SAVE_POST',
        promise: wp.apiRequest( {
            path: '/wp/v2/posts',
            method: 'POST',
            data: massagePostForAPI( post ),
        } ),
    }
);

export const loadPosts = posts => ( 
    // TODO massage post to remove .rendered, .raw, just title/content
    { 
        type: 'LOAD_POSTS',
        payload: massagePostsFromAPI( posts ),
    } 
);

