import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import './Contact.css';

export default function Vacatures() {
  const { vacancies } = siteData;

  return (
    <div>
      {/* Header Section */}
      <section className="section page-header">
        <div className="container">
          <h1>Vacatures</h1>
          <p className="subtitle">Sluit je aan bij ons team!</p>
        </div>
      </section>

      {/* Vacancies Grid */}
      <section className="section vacancies-grid-section">
        <div className="container">
          <div className="vacancies-grid">
            {vacancies.map((vacancy) => (
              <article key={vacancy.id} className="vacancy-card">
                <img src={vacancy.image} alt={vacancy.title} className="vacancy-image" />
                <div className="vacancy-content">
                  <h3>{vacancy.title}</h3>
                  <p>{vacancy.excerpt}</p>
                  <Link to={vacancy.link} className="btn btn-primary">
                    Meer over deze vacature
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
            Extra tijd, <span className="highlight">wanneer elke seconde telt</span>
          </h2>
          <Link to="/contact" className="btn btn-primary">
            Neem contact op
          </Link>
        </div>
      </section>
    </div>
  );
}
