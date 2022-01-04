import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <div className="nav-title">
        <h1 className="nav p-4 text-light title-header" style={{ fontSize: 35 }}>Nagle</h1>
      </div>
      <div className="nav-items">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  p-4" id="navbarNavAltMarkup">
          <ul className="nav">
            <li className="nav-item nav-link text-light header-text" ><NavLink exact activeclassName="active" to='/about'>About</NavLink></li>
            <li className="nav-item nav-link text-light header-text"><NavLink activeclassName="active" to='/portfolio'>Portfolio</NavLink></li>
            <li className="nav-item nav-link text-light header-text"><NavLink activeclassName="active" to='/resume'>Resume</NavLink></li>
            <li className="nav-item nav-link text-light header-text"><NavLink activeclassName="active" to='/contact'>Contact</NavLink></li>

          </ul>
        </div>
      </div>
    </nav>
    
    
  );
};
export default Header;
