/**
 * Redux actions
 */


export const savePost = post => ( { type: 'SAVE_POST', payload: post } );

export const loadPosts = posts => ( { type: 'LOAD_POSTS', payload: posts } );

