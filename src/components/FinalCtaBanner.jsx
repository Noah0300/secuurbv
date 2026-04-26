import React from 'react';
import { Link } from 'react-router-dom';
import './FinalCtaBanner.css';

export default function FinalCtaBanner() {
  return (
    <section
      className="final-cta-banner"
      style={{
        backgroundImage: "url('/secuurbv/images/Vacature-Werkvoorbereider-Calculator.jpeg')"
      }}
    >
      <div className="final-cta-banner-overlay"></div>
      <div className="container final-cta-banner-content">
        <div className="final-cta-banner-panel">
          <div className="final-cta-banner-text">
            <h2>
              Extra tijd,
              <br />
              <span>wanneer elke seconde telt.</span>
            </h2>
          </div>
          <Link to="/contact" className="btn btn-primary final-cta-banner-button">
            Neem contact op
          </Link>
        </div>
      </div>
    </section>
  );
}