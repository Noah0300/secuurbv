import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import './OverOns.css';

export default function OverOns() {
  const { overOns } = siteData;

  return (
    <div>

      {/* Main Intro Section */}
      <section className="over-ons-hero">
        <div className="container over-ons-intro-section">
          <div className="intro-text-column">
            <h1 className="page-title">Secuur Brandveiligheid</h1>
            <p className="intro-paragraph">
              Wij zijn <strong>Secuur Brandveiligheid BV</strong>. Wij zijn gespecialiseerd in passieve en bouwkundige brandveiligheid in elk pand. Wij zijn een zusterbedrijf van <em>Metz Nederland BV</em>. Dat is te zien in de manier waarop wij projecten aanpakken en uitvoeren. Wij zorgen voor een optimale samenwerking en een maximale informatievoorziening aan alle betrokkenen. Wij houden meer dan anderen rekening met de omgeving waarin wij uw opdracht uitvoeren.
            </p>
            
            <h2 className="section-heading vakmanschap-heading">{overOns.sections[0].title}</h2>
            <p className="section-paragraph">{overOns.sections[0].content}</p>
          </div>
          <div className="intro-image-column">
            <img src={siteData.overOns.sections[0].image} alt="Secuur Team" className="intro-image" />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="over-ons-content">
        <div className="container">
          {overOns.sections.slice(1).map((section, index) => (
            <div key={index} className={`content-row ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
              <div className="content-text">
                <h2 className="section-heading">{section.title}</h2>
                <p className="section-paragraph">{section.content}</p>
              </div>
              {section.image && (
                <div className="content-image">
                  <img src={section.image} alt={section.title} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="over-ons-process">
        <div className="container">
          <h2 className="process-title">Onze werkwijze</h2>
          <div className="process-grid">
            {overOns.processSteps.map((step, index) => (
              <div key={index} className="process-card">
                {step.iconImage && (
                  <div className="process-icon-image">
                    <img src={step.iconImage} alt={step.title} />
                  </div>
                )}
                <h3>{step.title}</h3>
                <p>{step.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="over-ons-cta">
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
