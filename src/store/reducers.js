

const initialState = {
    posts: [],
    publishStatus: '',
};

const rootReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'SAVE_POST':
            console.log( action.payload );
            return { 
                ...state,
                posts: [ action.payload, ...state.posts ],
            };
        case 'PUBLISHING':
            return {
                ...state,
                publishStatus: 'Saving...',
            };
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
        case 'LOAD_POSTS':
            return {
                ...state,
                posts: action.payload
            };
        
        default:
            return state;
    }
}

export default rootReducer;
