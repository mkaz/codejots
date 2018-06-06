/* External */
import React, { Component } from 'react';
import { connect } from "react-redux";

/* Internal */
import Header from './header';
import { Posts } from './post';
import Editor from './editor';
import { loadPosts } from './store/actions';

class App extends Component {
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
            <div className="app">
                <Header/>
                <section className="main">
                    <Editor/>
                    <Posts />
                </section>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadPosts: posts => dispatch( loadPosts( posts ) )
    };
};

export default connect( null, mapDispatchToProps)( App )
