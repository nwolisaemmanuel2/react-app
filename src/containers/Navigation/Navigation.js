import React from 'react';
import { StyledContainer } from "./Styles";
import { NavLink } from 'react-router-dom';
export const Navigation = () => {


    return (
        <StyledContainer>
            <div className='nav-logo'>Logo</div>
            <div className='nav-options'>
                <a className='nav-item'>New Entry</a>
                <a className='nav-item'>Past Entries </a>
                <NavLink to='/login'>
                    <a className='nav-item'>Log In</a>
                </NavLink>
                <NavLink to={'/signup'}>
                    <a className='nav-item'>Sign Up</a>
                </NavLink>
            </div>
        </StyledContainer>
    );

}