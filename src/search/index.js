/* global wp */

/* External */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchResults } from '../store/actions';
import './search.scss';

class Search extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            query: '',
        };
    }

    keyCheck = ( e ) => {
        if ( e.key === 'Enter' ) {
            this.handleSubmit();
        }
    }

    handleChange = ( e ) => {
        this.setState( { query: e.target.value } );
    }

    handleSubmit() {
        fetch( '/wp-json/wp/v2/posts?search=' + encodeURIComponent( this.state.query ) )
            .then( response => { return response.json(); } )
            .then( posts => { this.props.searchResults( posts, this.state.query ); } );
    }

    render() {
        return (
            <section className="search">
                <label> Search: </label>
                <input
                    onKeyDown={ this.keyCheck }
                    onChange={ this.handleChange } />
                <button onClick={ () => this.handleSubmit() } > <i className="fa fa-search"/> </button>
            </section>
        );
    }
}

const mapDispatchToProps = dispatch => ( {
    searchResults: ( posts, query ) => dispatch( searchResults( posts, query ) ),
} );

export default connect( null, mapDispatchToProps)( Search );
