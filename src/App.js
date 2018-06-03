/* External */
import React, { Component } from 'react';

/* Internal */
import Header from './header';
import { Posts } from './post'

class App extends Component {
    constructor( props ) {
        super( props );
        this.posts = [ 
            { id: 1, title: "Foo", content: "Bar" },
            { id: 2, title: "Bold Text Test", content: "This is some <b>bold</b> text." } 
        ];
    }

    render() {
        return (
            <div className="main">
                <Header/>
                <Posts posts={this.posts} />
            </div>
        );
    }
}

export default App;
