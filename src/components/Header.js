import React from 'react';
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <Link to={'/'}>
                <img src="/assets/logo.png" alt="logo imagen" />
            </Link>
        </header>
    );
}

export default Header;