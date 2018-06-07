/* External */
import React  from 'react';

/* Internal */
import Logo from '../assets/logo.svg';
import './header.scss';

export const Header = ( props ) => {
    return (
        <header className="site-header">
            <Logo className="site-logo" alt="logo" />
            <h3 className="site-title">Welcome to CodeJots</h3>
        </header>
    );
};

export default Header;
