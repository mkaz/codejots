/* External */
import React from 'react';
import { connect } from "react-redux";
import ReactMde, {ReactMdeTypes} from "react-mde";
import * as Showdown from "showdown";
import 'react-mde/lib/styles/scss/react-mde-all.scss';

/* Internal */
import "./editor.scss";
import { savePost } from "../store/actions";

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
        console.log( this.state.mdeState );
        if ( ! this.state.mdesState ) {
            this.props.noContent();
            return;
        }
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
        publishStatus: state.publishStatus };
};

const mapDispatchToProps = dispatch => {
    return {
        typedContent: () => dispatch( { type: 'TYPED_CONTENT' } ),
        noContent: () => dispatch( { type: 'PUBLISH_NO_CONTENT' } ),
        savePost: post => dispatch( savePost( post ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Editor );

