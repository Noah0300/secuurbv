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
                <img src="./images/Secuur-Beeldmerk.png" alt="Secuur BV Logo" className="footer-logo" />
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
                <li><a href="/wp-content/uploads/2022/02/algemene-inkoopvoorwaarden-Secuur-16-06-2020.pdf" target="_blank" rel="noopener noreferrer">Algemene inkoopvoorwaarden</a></li>
                <li><a href="/wp-content/uploads/2022/02/algemene-verkoopvoorwaarden-Secuur-16-06-2020.pdf" target="_blank" rel="noopener noreferrer">Algemene verkoopvoorwaarden</a></li>
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
                Secuur Brandveiligheid B.V. is een<br />
                <strong>onderdeel van</strong>
              </p>
              <img src="./images/METZ-logo-new-wit-600x202-1.png" alt="Metz Verbouw" className="metz-logo" />
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
