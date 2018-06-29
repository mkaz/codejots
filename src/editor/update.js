/* External */
import React from 'react';
import { connect } from 'react-redux';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import 'react-mde/lib/styles/scss/react-mde-all.scss';
import debounce from 'debounce';

/* Internal */
import './editor.scss';
import { cancelEdit, updatePost } from '../store/actions';
import createMdeFromPost from '../utils/create-mde-post';

class UpdateEditor extends React.Component {
    constructor( props ) {
        super( props );

        // TODO: convert content from HTML => Markdown
        this.state = {
            mdeState: createMdeFromPost( props.post ),
        };
        this.converter = new Showdown.Converter( { tables: true, simplifiedAutoLink: true } );
    }

    handleValueChange = ( mdeState ) => {
        this.setState( { mdeState } );
    }

    handleSaveButton = () => {
        this.props.updatePost(
            createPostFromMde( this.state.mdeState )
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
                        Update Post
                    </button>
                    </span>
                    <span><a onClick={ () => this.props.cancelEdit( this.props.post.id ) }> Cancel </a></span>
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
    cancelEdit: ( postId ) => dispatch( cancelEdit( postId ) ),
    updatePost: ( post ) => dispatch( updatePost( post ) ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( UpdateEditor );
