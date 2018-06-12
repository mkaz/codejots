/* External */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Internal */
import { trashPost } from '../store/actions';

class PostMenu extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            menuClass: "items-hide"
        }
    };

    toggleMenu() {
        const mc =( this.state.menuClass === "items-hide" ) ? 'items-show' : 'items-hide';
        this.setState( { menuClass: mc } );
    }

    render() {
        return (
            <nav className="postmenu">
                <div className="toggle" onClick={ () => this.toggleMenu() }><i className="fa fa-angle-down"></i></div>
                <ul className={ this.state.menuClass }>
                    <li> Edit Post </li>
                    <li onClick={ () => this.props.trashPost( this.props.postId ) }> Move to Trash </li>
                </ul>
            </nav>
        );
    }
}

const mapDispatchToProps = dispatch => ( {
    trashPost: ( postId ) => dispatch( trashPost( postId ) ),
} );

export default connect( null, mapDispatchToProps )( PostMenu );
