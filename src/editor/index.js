/* External */
import React from 'react';
import { connect } from 'react-redux';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import 'react-mde/lib/styles/scss/react-mde-all.scss';
import debounce from 'debounce';

/* Internal */
import './editor.scss';
import { savePost } from '../store/actions';
import { createPostFromMde } from '../post/utils';

class Editor extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            mdeState: ( localStorage.getItem( 'markdown' ) ) ? { markdown: localStorage.getItem( 'markdown' ) } : null,
            cleared: false,
        };
        this.converter = new Showdown.Converter( { tables: true, simplifiedAutoLink: true } );
        this.persistToLocalStorage = debounce( this.persistToLocalStorage, 1000 );
    }

    persistToLocalStorage = ( ) => {
        if ( this.state.mdeState != null && this.state.mdeState.markdown ) {
            localStorage.setItem( 'markdown', this.state.mdeState.markdown );
        }
    }

    handleValueChange = ( mdeState ) => {
        this.persistToLocalStorage();
        this.setState( { mdeState } );
        if ( this.state.mdeState && ! this.state.cleared ) {
            this.props.typedContent();
            this.setState( { cleared: true } );
        }
    }

    clearMdeState = () => {
        this.setState( { mdeState: null } );
        localStorage.setItem( 'markdown', null );
    };

    handleSaveButton = () => {
        if ( this.state.mdeState == null ) {
            this.props.noContent();
            this.setState( { cleared: false } );
            return;
        }
        this.props.savePost(
            createPostFromMde( this.state.mdeState ),
            this.clearMdeState
        );
    }

    render() {
        return (
            <section className="editor">
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
                        Save Post
                    </button></span>
                    <span className="status">{ this.props.publishStatus }</span>
                </div>
            </section>
        );
    }
};

const mapStateToProps = state => ( {
    publishStatus: state.publishStatus,
} );

const mapDispatchToProps = dispatch => ( {
    typedContent: () => dispatch( { type: 'TYPED_CONTENT' } ),
    noContent: () => dispatch( { type: 'PUBLISH_NO_CONTENT' } ),
    savePost: ( post, cb ) => dispatch( savePost( post, cb ) ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( Editor );
