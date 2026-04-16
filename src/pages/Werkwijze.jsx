import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import './Contact.css';

export default function Werkwijze() {
  const { werkwijze } = siteData;

  return (
    <div>
      {/* Header Section */}
      <section className="section page-header">
        <div className="container">
          <h1>{werkwijze.title}</h1>
          <p className="subtitle">{werkwijze.intro}</p>
        </div>
      </section>

      {/* Listening Approach Section */}
      <section className="section werkwijze-approach">
        <div className="container">
          <h2>{werkwijze.listeningApproach.title}</h2>
          <p>{werkwijze.listeningApproach.content}</p>
        </div>
      </section>

      {/* Werkwijze Cards Section */}
      <section className="section werkwijze-cards">
        <div className="container">
          <div className="cards-grid">
            {werkwijze.sections.map((section, index) => (
              <article key={section.id} className="werkwijze-card">
                <img src={section.image} alt={section.title} className="card-image" />
                <div className="card-content">
                  <h3>{index + 1}. {section.title}</h3>
                  <p>{section.content}</p>
                  <Link to={section.link} className="link-arrow">
                    {section.title} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section final-cta-section">
        <div className="container">
          <h2>
            Extra tijd, elke seconde telt.
          </h2>
          <Link to="/contact" className="btn btn-large">
            Neem contact op
          </Link>
        </div>
      </section>
    </div>
  );
}
