import React from 'react';
import { Link } from "react-router-dom";
import '../css/Nav.css';

function Nav(){
  return (
    <nav className="nav-container">
        <ul>
            <li>
                <Link to="/losangeles">Los Angeles</Link>
            </li>
            <li>
                <Link to="/">New York</Link>
            </li>
            <li>
                <Link to="/chicago">Chicago</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
