/* External */
import React, { Component } from 'react';

/* Internal */
import Header from './header';
import { Posts } from './post'

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        // call out to API

        fetch( '/wp-json/wp/v2/posts')
            .then( response => { console.log( response ); return response.json() } )
            .then( posts => { console.log( posts ); this.setState( { posts: posts } ) } );

        // this.setState( { posts: [
        //     { id: 1, title: "Foo", content: "Bar" },
        //     { id: 2, title: "Bold Text Test", content: "This is not some <b>bold</b> text." } 
        // ] } );
    }

    render() {
        return (
            <div className="main">
                <Header/>
                <Posts posts={this.state.posts} />
            </div>
        );
    }
}

export default App;
