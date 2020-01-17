import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header>
            <nav>
                <Link to={'/weather/petersburg'}> Saint-Peterburg </Link>
                <Link to={'/weather/moscow'}> Moscow </Link> 
                <Link to={'/weather/rostov'}> Rostov </Link>  
            </nav>
        </header>
    ) 
}

export default Header;