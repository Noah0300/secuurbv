import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import FinalCtaBanner from '../components/FinalCtaBanner';
import Seo from '../components/Seo';
import '../pages/Home.css';

export default function Home() {
  const { homepage } = siteData;

  return (
    <div>
      <Seo
        title="Home"
        description="Secuur Brandveiligheid BV is specialist in passieve en bouwkundige brandveiligheid. Wij verzorgen onderzoek, uitvoering en rapportage met minimale overlast voor zorginstellingen, corporaties en aannemers."
        keywords="passieve brandveiligheid, bouwkundige brandveiligheid, brandvertragende oplossingen, brandveiligheid Schiedam, Secuur Brandveiligheid"
        breadcrumbItems={[{ name: 'Home', path: '/' }]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Passieve en bouwkundige brandveiligheid',
          provider: {
            '@type': 'Organization',
            name: 'Secuur Brandveiligheid B.V.'
          },
          serviceType: 'Brandveiligheidsadvies en uitvoering',
          areaServed: 'Nederland',
          url: 'https://www.secuurbv.nl',
          description: 'Onderzoek, advies en uitvoering van passieve en bouwkundige brandveiligheid met minimale overlast.',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Brandveiligheidsdiensten',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Onderzoek en advies' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Uitvoering brandvertragende maatregelen' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Eindrapportage en certificering' } }
            ]
          }
        }}
      />

      {/* Hero Section */}
      <section className="hero-section">
        {/* YouTube Video Background */}
        <div className="hero-video-wrapper">
          <iframe
            className="hero-video"
            src="https://www.youtube.com/embed/qHVwcZWSJT0?autoplay=1&mute=1&loop=1&playlist=qHVwcZWSJT0&controls=0&showinfo=0"
            title="Secuur Brandveiligheid"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="hero-overlay"></div>
        </div>

        {/* Logo Overlay on top of video */}
        <div className="hero-logo-overlay">
          <img src="/secuurbv/images/extra-tijd-header.svg" alt="Extra Tijd Logo" className="hero-logo-image" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container">
          <p className="intro-text">
            Wij zijn <strong>Secuur Brandveiligheid BV</strong>, specialist in passieve en bouwkundige brandveiligheid voor elk type pand. Als zusterbedrijf van <a href="https://metz-nederland.nl/" target="_blank" rel="noopener noreferrer" className="intro-link">Metz Nederland BV</a> delen wij dezelfde zorgvuldige en professionele aanpak in voorbereiding, uitvoering en samenwerking. Wij zorgen voor optimale afstemming en heldere informatie voor alle betrokkenen. Daarbij hebben wij nadrukkelijk oog voor de omgeving waarin wij uw opdracht uitvoeren.
          </p>
        </div>
      </section>

      {/* News/Werkwijze Section */}
      <section className="section news-section">
        <div className="container">
          <h2>{homepage.news.title}</h2>
          <p className="section-subtitle">{homepage.news.subtitle}</p>

          <div className="linkedin-grid">
            {homepage.linkedin.posts.map((post) => (
              <article key={post.id} className="linkedin-card">
                <iframe
                  className="linkedin-embed"
                  src={post.embedUrl}
                  title="LinkedIn post van Secuur Brandveiligheid"
                  loading="lazy"
                ></iframe>
                <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  Open op LinkedIn
                </a>
              </article>
            ))}
          </div>
          
          {/* Three separate sections instead of tabs */}
          <div className="werkwijze-grid">
            {homepage.news.items.map((item, index) => (
              <div key={item.id} className="werkwijze-card">
                <div className="werkwijze-number">{index + 1}</div>
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} className="werkwijze-image" />
                <p>{item.excerpt}</p>
                <Link to={item.link} className="link-arrow">
                  {item.title} →
                </Link>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Certificates Section */}
      <section className="section certificates-section">
        <div className="container">
          <div className="certificates-grid">
            {homepage.certificates.items.map((cert, index) => (
              <figure key={index} className="certificate">
                <img src={cert.image} alt={cert.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section safety-section">
        <div className="container">
          <div className="safety-wrapper">
            <div className="safety-video">
              <iframe
                className="safety-video-embed"
                src="https://www.youtube.com/embed/qHVwcZWSJT0?autoplay=1&mute=1&loop=1&playlist=qHVwcZWSJT0&controls=0&showinfo=0"
                title="Secuur Brandveiligheid"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="safety-text">
              <h2>{homepage.safetySection.title}</h2>
              <p>{homepage.safetySection.content}</p>
              <Link to="/contact" className="btn btn-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaBanner />
    </div>
  );
}
