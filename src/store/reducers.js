

const initialState = {
    posts: []
};

const rootReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'ADD_POST':
            return { 
                ...state, 
                posts: [ ...state.posts, action.payload ],
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
