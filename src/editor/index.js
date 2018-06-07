/* External */
import React from 'react';
import { connect } from "react-redux";
import ReactMde, {ReactMdeTypes} from "react-mde";
import * as Showdown from "showdown";
import 'react-mde/lib/styles/scss/react-mde-all.scss';
import uuid from 'uuid';

/* Internal */
import "./editor.scss";
import { savePost } from "../store/actions";

const createPostFromMde = ( mde ) => {
    const post = { title: {}, content: {} };
    post.id = uuid.v1()
    post.title.rendered = "Some title";
    post.content.rendered = mde.html;
    return post;
}

class Editor extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            mdeState: null,
        };
        this.converter = new Showdown.Converter( { tables: true, simplifiedAutoLink: true } );
    }
    
    handleValueChange = ( mdeState ) => {
        this.setState( { mdeState } );
        if ( this.state.mdeState ) {
            this.props.typedContent();
        }
    }

    handleSaveButton = () => {
        if ( this.state.mdeState == null ) {
            this.props.noContent();
            return;
        }
        this.props.savePost( createPostFromMde( this.state.mdeState ) );
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
                        onClick={ this.handleSaveButton } >
                        Save Post
                    </button></span>
                    <span className="status">{ this.props.publishStatus }</span>
                </div>
            </section>
        );
    }
};

const mapStateToProps = state => {
    return { 
        publishStatus: state.publishStatus
    };
};

const mapDispatchToProps = dispatch => {
    return {
        typedContent: () => dispatch( { type: 'TYPED_CONTENT' } ),
        noContent: () => dispatch( { type: 'PUBLISH_NO_CONTENT' } ),
        savePost: post => dispatch( savePost( post ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Editor );

