import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Left Section - Company Info */}
            <div className="footer-section footer-about">
              <div className="company-logo-text">
                <Link to="/">
                  <img src="/secuurbv/images/Secuur-Beeldmerk.png" alt="Secuur BV Logo" className="footer-logo" />
                </Link>
              </div>
              <p>
                <strong>Secuur Brandveiligheid B.V.</strong><br />
                Cornelis Houtmanstraat 11<br />
                3124 LB Schiedam
              </p>
            </div>

            {/* Juridisch Section */}
            <div className="footer-section footer-juridisch">
              <h4>Juridisch</h4>
              <ul>
                <li><a href={`${process.env.PUBLIC_URL}/voorwaarden/algemene-inkoopvoorwaarden.pdf`} target="_blank" rel="noopener noreferrer">Algemene inkoopvoorwaarden</a></li>
                <li><a href={`${process.env.PUBLIC_URL}/voorwaarden/algemene-verkoopvoorwaarden.pdf`} target="_blank" rel="noopener noreferrer">Algemene verkoopvoorwaarden</a></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="footer-section footer-contact">
              <h4>Contact</h4>
              <p>
                <strong>T:</strong> <a href="tel:+31103214216">010 321 42 16</a>
              </p>
              <p>
                <strong>M:</strong> <a href="mailto:info@secuurbv.nl">info@secuurbv.nl</a>
              </p>
              <p>
                <strong>K:</strong> 77360672
              </p>
            </div>

            {/* Right Section - Partnership */}
            <div className="footer-section footer-partnership">
              <p className="partnership-text">
                Secuur Brandveiligheid B.V. is een zusterbedrijf van
              </p>
              <a href="https://metz-nederland.nl/" target="_blank" rel="noopener noreferrer">
                <img src="/secuurbv/images/METZ-logo-new-wit-600x202-1.png" alt="Metz Verbouw" className="metz-logo" />
              </a>
            </div>

            {/* Social Media Section */}
            <div className="footer-section footer-social">
              <h4>Volg Ons</h4>
              <div className="social-icons">
                <a href="https://nl.linkedin.com/company/secuur-brandveiligheid" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <img src="/secuurbv/images/LinkedIn_icon.svg.webp" alt="LinkedIn" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © 2026 Secuur Brandveiligheid B.V. | Alle rechten voorbehouden | Website by <a href="https://deusdigitus.nl/" target="_blank" rel="noopener noreferrer">DeusDigitus</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
