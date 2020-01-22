import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
    border: '1px solid red',
    color: 'red',
    fontWeight: 'bold'
}

function Header() {

    return (
        <header>
            <nav>
                <NavLink activeStyle={activeStyle} to={'/weather/petersburg'}> Saint-Peterburg </NavLink>
                <NavLink activeStyle={activeStyle} to={'/weather/moscow'}> Moscow </NavLink> 
                <NavLink activeStyle={activeStyle} to={'/weather/rostov'}> Rostov </NavLink>  
            </nav>
        </header>
    ) 
}

export default Header;