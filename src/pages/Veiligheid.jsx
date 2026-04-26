import React from 'react';
import { siteData } from '../data/siteData';
import FinalCtaBanner from '../components/FinalCtaBanner';
import Seo from '../components/Seo';
import './Veiligheid.css';

export default function Veiligheid() {
  const { veiligheid } = siteData;

  return (
    <div>
      <Seo
        title="Veiligheid"
        description="Secuur brengt brandvertragende middelen aan op vloeren, muren, plafonds en draagconstructies voor extra tijd bij brand en veilige ontruiming. Vraag direct advies aan voor uw gebouw."
        keywords="brandvertragende oplossingen, passieve brandveiligheid, brandveiligheid gebouwen, veilige ontruiming"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Veiligheid', path: '/veiligheid' }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Brandvertragende bescherming',
          serviceType: 'Bescherming van vloeren, muren, plafonds en draagconstructies',
          provider: {
            '@type': 'Organization',
            name: 'Secuur Brandveiligheid B.V.'
          },
          areaServed: 'Nederland',
          url: 'https://www.secuurbv.nl/veiligheid',
          description: 'Brandvertragende oplossingen voor vloeren, muren, plafonds en draagconstructies met extra tijd voor veilige ontruiming.'
        }}
      />

      <section className="section veiligheid-header">
        <div className="container">
          <h1>Onze veiligheid</h1>
          <p className="subtitle">
            Brandvertragende oplossingen voor vloeren, muren, plafonds en draagconstructies met extra tijd voor veilige ontruiming.
          </p>
        </div>
      </section>

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

      <FinalCtaBanner />
    </div>
  );
}
