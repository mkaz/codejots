/* global wp */

/* External */
import React, { Component } from 'react';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import 'react-mde/lib/styles/scss/react-mde-all.scss';
import debounce from 'debounce';

class CommentForm extends Component {

    // todo persist comment to local storage using post id
    constructor( props ) {
        super( props );
        this.lskey = 'comment-' + this.props.post.id;
        this.state = {
            mdeState: ( localStorage.getItem( this.lskey ) ) ? { markdown: localStorage.getItem( this.lskey ) } : null,
        };
        this.converter = new Showdown.Converter( { tables: true, simplifiedAutoLink: true } );
        this.persistToLocalStorage = debounce( this.persistToLocalStorage, 1000 );
    }

    persistToLocalStorage = ( ) => {
        if ( this.state.mdeState != null && this.state.mdeState.markdown ) {
            localStorage.setItem( this.lskey, this.state.mdeState.markdown );
        }
    }

    handleValueChange = ( mdeState ) => {
        this.persistToLocalStorage();
        this.setState( { mdeState } );
    }

    clearMdeState = () => {
        this.setState( { mdeState: null } );
        localStorage.setItem( this.lskey, null );
    };

    handleSaveButton = () => {
        wp.apiRequest( {
            path: '/wp/v2/comments',
            method: 'POST',
            data: { post: this.props.post.id, content: this.state.mdeState.html },
        } ).then( () => {
            this.clearMdeState();
        } );
    }

    render() {
        return (
            <section className="comment-form">
                <h5> Add Your Comment </h5>
                <ReactMde
                    layout="tabbed"
                    onChange={ this.handleValueChange }
                    editorState={ this.state.mdeState }
                    generateMarkdownPreview = {
                        ( markdown ) => Promise.resolve( this.converter.makeHtml( markdown ) )
                    }
                />
                <div className="action-bar">
                    <span><button
                        className="save-button"
                        onClick={ () => this.handleSaveButton() } >
                        Add
                    </button></span>
                </div>
            </section>
        );
    }
}

export default CommentForm;
