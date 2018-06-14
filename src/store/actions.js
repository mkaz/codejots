/**
 * Redux actions
 */

import { massagePostsFromAPI, massagePostForAPI } from '../post/utils';

export const savePost = ( post, callback ) => ( {
    type: 'SAVE_POST',
    promise: wp.apiRequest( {
        path: '/wp/v2/posts',
        method: 'POST',
        data: massagePostForAPI( post ),
    } ),
    meta: {
        onSuccess: callback,
    },
} );

export const loadPosts = posts => ( {
    type: 'LOAD_POSTS',
    payload: massagePostsFromAPI( posts ),
} );

export const trashPost = postId => ( {
    type: 'TRASH_POST',
    promise: wp.apiRequest( {
        path: '/wp/v2/posts/' + postId,
        method: 'DELETE',
    } ),
} );
