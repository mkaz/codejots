/* Reducers */

/* External */
import { handle } from 'redux-pack';

/* Internal */
import { massagePostFromAPI } from '../post/utils';

const initialState = {
    posts: [],
    publishStatus: '',
    postsLabel: '',
};

const rootReducer = (state = initialState, action) => {
    switch ( action.type ) {
    case 'SAVE_POST':
        return handle( state, action, {
            start: prevState => ( { ...prevState, publishStatus: 'Saving' } ),
            finish: prevState => ( { ...prevState, publishStatus: '' } ),
            failure: prevState => ( { ...prevState, publishStatus: 'Error saving' } ),
            success: prevState => ( { ...prevState,
                posts: [ massagePostFromAPI( action.payload ), ...prevState.posts ],
                publishStatus: 'Saved',
            } ),
        } );
    case 'UPDATE_POST':
        return handle( state, action, {
            success: prevState => ( { ...prevState,
                posts: prevState.posts.map( ( post ) => {
                    if ( post.id === action.payload.id ) {
                        return massagePostFromAPI( action.payload );
                    }
                    return post;
                } ),
            } ),
        } );
    case 'PUBLISH_NO_CONTENT':
        return {
            ...state,
            publishStatus: 'Nothing to save.',
        };
    case 'TYPED_CONTENT':
        return {
            ...state,
            publishStatus: '',
        };
    case 'RECENT_POSTS':
        return {
            ...state,
            posts: action.payload,
            postsLabel: 'Recent Posts',
        };
    case 'TRASH_POST':
        return handle ( state, action, {
            success: prevState => ( { ...prevState,
                posts: prevState.posts.filter( ( post ) => {
                    return post.id !== action.payload.id;
                } ),
            } ),
        } );
    case 'SEARCH_RESULTS':
        return {
            ...state,
            posts: action.payload,
            postsLabel: 'Search Results: ' + action.query,
        };
    case 'EDIT_POST':
        return {
            ...state,
            posts: state.posts.map( ( post ) => {
                if ( post.id === action.payload.id ) {
                    post.editing = true;
                }
                return post;
            } ),
        };
    case 'CANCEL_EDIT':
        return {
            ...state,
            posts: state.posts.map( ( post ) => {
                if ( post.id === action.payload.id ) {
                    post.editing = false;
                }
                return post;
            } ),
        };
    default:
        return state;
    }
};

export default rootReducer;
