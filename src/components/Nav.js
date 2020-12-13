import React from 'react';
import { Link } from "react-router-dom";
import '../css/Nav.css';

function Nav(){
  return (
    <nav className="nav-container">
        <ul>
            <li>
                <Link to="/lastweek">Last Week</Link>
            </li>
            <li>
                <Link to="/">This Week</Link>
            </li>
            <li>
                <Link to="/nextweek">Next Week</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
