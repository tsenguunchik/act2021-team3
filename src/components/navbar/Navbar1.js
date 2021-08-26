import React from 'react';
import {
    Nav,
    NavLink
} from './NavbarElements';

const Navbar1 = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h2>Home</h2>
                </NavLink>
            </Nav>
        </>
    );
};

export default Navbar1;
