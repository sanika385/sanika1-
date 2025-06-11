import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav-bar">
                    <h1 className="logo-text">Vivekanand College, Kolhapur</h1>
                    <div className="nav-links">
                      <Link to="/home" className="nav-link">Home</Link>
                      <Link to="/about" className="nav-link">About</Link>
                      <Link to="/courses" className="nav-link">Courses</Link>
                      <Link to="/contact" className="nav-link">Contact</Link>
                      <Link to="/admission"></Link>
                      <button className="btn">Apply Now!</button>

                    </div>
            </nav>
        </header>
    );
};

export default Header;