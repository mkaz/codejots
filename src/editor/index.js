/* External */
import React from 'react';
import { connect } from "react-redux";
import ReactMde, {ReactMdeTypes} from "react-mde";
import * as Showdown from "showdown";
import 'react-mde/lib/styles/scss/react-mde-all.scss';

/* Internal */
import "./editor.scss";
import { savePost } from "../store/actions";

const mapDispatchToProps = dispatch => {
    return {
        savePost: post => dispatch( savePost( post ) )
    };
};

class ConnectedEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            mdeState: null,
        };
    }
    
    handleValueChange = ( mdeState ) => {
        this.setState( { mdeState } );
    }

    render() {
        return (
            <section className="editor">
                 <ReactMde
                    onChange={ this.handleValueChange }
                    editorState={ this.state.mdeState }
                    //generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
                />
            </section>
        );
    }
};

const Editor = connect( null, mapDispatchToProps )( ConnectedEditor );
export default Editor;
