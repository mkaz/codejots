/**
 * Redux actions
 */

/* global wp */

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

export const recentPosts = posts => ( {
    type: 'RECENT_POSTS',
    payload: massagePostsFromAPI( posts ),
} );

export const trashPost = postId => ( {
    type: 'TRASH_POST',
    promise: wp.apiRequest( {
        path: '/wp/v2/posts/' + postId,
        method: 'DELETE',
    } ),
} );


export const searchResults = ( posts, query ) => ( {
    type: 'SEARCH_RESULTS',
    payload: massagePostsFromAPI( posts ),
    query: query,
} );
