/* External */
import React, { Component } from 'react';
import { connect } from "react-redux";

/* Internal */
import Header from './header';
import { Posts } from './post';
import Editor from './editor';
import { loadPosts } from './store/actions';

const mapDispatchToProps = dispatch => {
    return {
        loadPosts: posts => dispatch( loadPosts( posts ) )
    };
};

class ConnectedApp extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // call out to API to load posts
        fetch( '/wp-json/wp/v2/posts')
            .then( response => { return response.json() } )
            .then( posts => { this.props.loadPosts( posts ) } );
    }


    render() {
        return (
            <div className="main">
                <Header/>
                <Editor/>
                <Posts />
            </div>
        );
    }
}

const App = connect( null, mapDispatchToProps)( ConnectedApp )

export default App;
