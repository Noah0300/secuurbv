import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import './Veiligheid.css';

export default function Veiligheid() {
  const { veiligheid } = siteData;

  return (
    <div>
      {/* Veiligheid Sections */}
      <section className="section veiligheid-sections">
        <div className="container">
          {veiligheid.sections.map((section, index) => (
            <article key={index} className={`veiligheid-section ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
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

      {/* Final CTA Section */}
      <section className="veiligheid-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Extra tijd, <span className="highlight">wanneer elke seconde telt</span></h2>
            <Link to="/contact" className="btn btn-primary">
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
