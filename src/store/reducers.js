/* Reducers */
import { handle } from 'redux-pack';

const initialState = {
    posts: [],
    publishStatus: '',
};

const rootReducer = (state = initialState, action) => {
    switch ( action.type ) {
    case 'SAVE_POST':
        return handle( state, action, {
            start: prevState => ( { ...prevState, publishStatus: 'Saving' } ),
            finish: prevState => ( { ...prevState, publishStatus: '' } ),
            failure: prevState => ( { ...prevState, publishStatus: 'Error saving' } ),
            success: prevState => ( { ...prevState, publishStatus: 'Saved' } ),
            always: prevState => ( { ...prevState } ),
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
    case 'LOAD_POSTS':
        return {
            ...state,
            posts: action.payload,
        };
    
    default:
        return state;
    }
};

export default rootReducer;
