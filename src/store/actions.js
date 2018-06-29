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

export const updatePost = ( post, callback ) => ( {
    type: 'UPDATE_POST',
    promise: wp.apiRequest( {
        path: '/wp/v2/posts',
        method: 'PUT',
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

export const editPost = postId => ( {
    type: 'EDIT_POST',
    payload: { id: postId },
} );

export const cancelEdit = postId => ( {
    type: 'CANCEL_EDIT',
    payload: { id: postId },
} );

export const searchResults = ( posts, query ) => ( {
    type: 'SEARCH_RESULTS',
    payload: massagePostsFromAPI( posts ),
    query: query,
} );
