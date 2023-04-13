import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
       
        <div className="nav-wrapper">
            <Link to={'/'} className="brand-logo">HELP BOT</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            </ul>
        </div>
    </nav>
)