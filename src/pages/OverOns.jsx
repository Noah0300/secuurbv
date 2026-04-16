import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import './Contact.css';

export default function OverOns() {
  const { overOns } = siteData;

  return (
    <div>
      {/* Header Section */}
      <section className="section page-header">
        <div className="container">
          <h1>{overOns.title}</h1>
          <p className="subtitle">{overOns.intro}</p>
        </div>
      </section>

      {/* About Sections */}
      <section className="section about-sections">
        <div className="container">
          {overOns.sections.map((section, index) => (
            <article key={index} className={`about-section ${index % 2 === 0 ? 'left-text' : 'right-text'}`}>
              <div className="section-text">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
              {section.image && (
                <div className="section-image">
                  <img src={section.image} alt={section.title} />
                </div>
              )}
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
