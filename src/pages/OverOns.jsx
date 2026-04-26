import React from 'react';
import { siteData } from '../data/siteData';
import FinalCtaBanner from '../components/FinalCtaBanner';
import Seo from '../components/Seo';
import './OverOns.css';

export default function OverOns() {
  const { overOns } = siteData;
  const materialSection = overOns.sections[1];
  const qualitySection = overOns.sections[2];

  return (
    <div>
      <Seo
        title="Over Ons"
        description="Lees meer over Secuur Brandveiligheid BV, onze vakmensen, gecertificeerde materialen en kwaliteitsaanpak voor passieve en bouwkundige brandveiligheid."
        keywords="over Secuur Brandveiligheid, passieve brandveiligheid specialist, bouwkundige brandveiligheid, gecertificeerde materialen"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Over Ons', path: '/over-ons' }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Passieve brandveiligheid en bouwkundige brandveiligheid',
          serviceType: 'Advies en uitvoering passieve brandveiligheid',
          provider: {
            '@type': 'Organization',
            name: 'Secuur Brandveiligheid B.V.'
          },
          areaServed: 'Nederland',
          url: 'https://www.secuurbv.nl/over-ons',
          description: 'Secuur Brandveiligheid biedt een hoogwaardige aanpak met gecertificeerde materialen en vakmensen voor bouwkundige brandveiligheid.'
        }}
      />

      {/* Main Intro Section */}
      <section className="over-ons-hero">
        <div className="container over-ons-intro-section">
          <div className="intro-text-column">
            <h1 className="page-title">Secuur Brandveiligheid</h1>
            <p className="intro-paragraph">
              <strong>Secuur Brandveiligheid BV</strong> is specialist in passieve en bouwkundige brandveiligheid voor elk type pand. Als zusterbedrijf van <a href="https://metz-nederland.nl/" target="_blank" rel="noopener noreferrer">Metz Nederland BV</a> werken wij met dezelfde zorgvuldige aanpak. Wij zorgen voor goede samenwerking, heldere informatie en minimale overlast in de omgeving van uw opdracht.
            </p>
            <p className="intro-paragraph">
              Wij geven een indruk van onze dienstverlening met gecertificeerde materialen, vakmensen en een duidelijke kwaliteitsaanpak.
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
          <div className="content-row text-left">
            <div className="content-text">
              <h2 className="section-heading">{materialSection.title}</h2>
              <p className="section-paragraph">{materialSection.content}</p>

              <h2 className="section-heading kwaliteit-inline-heading">{qualitySection.title}</h2>
              <p className="section-paragraph">{qualitySection.content}</p>
            </div>
            {materialSection.image && (
              <div className="content-image">
                <img src={materialSection.image} alt={materialSection.title} />
              </div>
            )}
          </div>
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

      <FinalCtaBanner />
    </div>
  );
}
