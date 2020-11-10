import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg'
// Added this so that React can handle SVG's

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
        </diV>
    </div>
)

export default Header;