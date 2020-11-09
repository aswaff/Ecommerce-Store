import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg'
// Added this so that React can handle SVG's

import './header.styles.scss';

const Header = () => (
    <div className='header'> 
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <diV className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
        </diV>
    </div>
)

export default Header;