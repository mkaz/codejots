/* External */
import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';

class PostMenu extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            menuClass: "items-hide"
        }
        this.toggleMenu = this.toggleMenu.bind( this );
    };

    toggleMenu() {
        if ( this.state.menuClass === "items-hide" ) {
            this.setState( { menuClass: "items-show" } );
        } else {
            this.setState( { menuClass: "items-hide" } );
        }
    }

    render() {
        return (
            <nav className="postmenu">
                <div className="toggle" onClick={ this.toggleMenu }><i className="fa fa-angle-down"></i></div>
                <ul className={ this.state.menuClass }>
                    <li> Edit Post </li>
                    <li> Move to Trash </li>
                </ul>
            </nav>
        );
    }
}

export default PostMenu;
