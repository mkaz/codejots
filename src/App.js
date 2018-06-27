/* External */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Internal */
import Search from './search';
import Posts from './post';
import Editor from './editor';
import { recentPosts } from './store/actions';

class App extends Component {

    componentDidMount() {
        fetch( '/wp-json/wp/v2/posts')
            .then( response => { return response.json(); } )
            .then( posts => { this.props.recentPosts( posts ); } );
    }

    render() {
        return (
            <div className="app">
                <section className="main">
                    <Search/>
                    <Editor/>
                    <Posts />
                </section>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ( {
    recentPosts: posts => dispatch( recentPosts( posts ) ),
} );

export default connect( null, mapDispatchToProps)( App );
