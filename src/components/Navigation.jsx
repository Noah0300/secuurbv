import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/over-ons', label: 'Over ons' },
    {
      label: 'Werkwijze',
      submenu: [
        { path: '/werkwijze', label: 'Werkwijze' },
        { path: '/werkwijze/onderzoek-en-advies', label: 'Onderzoek en advies' },
        { path: '/werkwijze/de-uitvoering', label: 'De uitvoering' },
        { path: '/werkwijze/het-eindrapport', label: 'Het eindrapport' }
      ]
    },
    { path: '/veiligheid', label: 'Veiligheid' },
    { path: '/projecten', label: 'Projecten' },
    { path: '/vacatures', label: 'Vacatures' }
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-default">
      <div className="container navbar-container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <img 
              src="/images/200203-Secuur-BV-logo-312x77-1.png" 
              alt="Secuur BV Logo" 
              className="logo-image"
            />
            <span className="logo-text">Secuur BV</span>
          </Link>
        </div>

        <div className={`navbar-collapse ${isOpen ? 'in' : ''}`}>
          <ul className="nav navbar-nav">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className={`menu-item ${item.submenu ? 'dropdown' : ''} ${
                  item.path && isActive(item.path) ? 'active' : ''
                }`}
              >
                {item.submenu ? (
                  <>
                    <span className="menu-title">{item.label}</span>
                    <ul className="dropdown-menu">
                      {item.submenu.map((subitem, sidx) => (
                        <li key={sidx}>
                          <Link to={subitem.path} onClick={closeMenu}>
                            {subitem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.path} onClick={closeMenu}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>

          <div className="header-contact-button">
            <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
