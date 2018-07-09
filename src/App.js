/* External */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Internal */
import Search from './search';
import Posts from './post';
import Editor from './editor';
import { getUser, recentPosts } from './store/actions';

class App extends Component {

    componentDidMount() {
        fetch( '/wp-json/wp/v2/posts')
            .then( response => { return response.json(); } )
            .then( posts => { this.props.recentPosts( posts ); } );

        this.props.getUser();
    }

    render() {
        return (
            <div className="app">
                <section className="main">
                    <Search/>
                    { this.props.isLoggedIn && <Editor/> }
                    <Posts />
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ( {
    isLoggedIn: state.isLoggedIn,
} );


const mapDispatchToProps = dispatch => ( {
    recentPosts: posts => dispatch( recentPosts( posts ) ),
    getUser: () => dispatch( getUser() ),
} );

export default connect( mapStateToProps, mapDispatchToProps)( App );
