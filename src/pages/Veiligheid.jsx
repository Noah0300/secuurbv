import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import './Contact.css';

export default function Veiligheid() {
  const { veiligheid } = siteData;

  return (
    <div>
      {/* Header Section */}
      <section className="section page-header">
        <div className="container">
          <h1>{veiligheid.title}</h1>
          <p className="subtitle">{veiligheid.intro}</p>
        </div>
      </section>

      {/* Veiligheid Sections */}
      <section className="section veiligheid-sections">
        <div className="container">
          {veiligheid.sections.map((section, index) => (
            <article key={index} className={`veiligheid-section ${index % 2 === 0 ? 'left-text' : 'right-text'}`}>
              <div className="section-text">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
              <div className="section-image">
                <img src={section.image} alt={section.title} />
              </div>
            </article>
          ))}
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
