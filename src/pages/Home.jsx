import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import '../pages/Home.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const { company, homepage } = siteData;

  return (
    <div>
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
          <img src={`${process.env.PUBLIC_URL}/images/extra-tijd-header.svg`} alt="Extra Tijd Logo" className="hero-logo-image" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container">
          <p className="intro-text">
            Wij zijn <strong>{company.name}</strong>. Wij zijn gespecialiseerd in passieve en bouwkundige brandveiligheid in elk pand. Wij zijn een zusterbedrijf van <em>Metz Nederland BV</em>. Dat is te zien in de manier waarop wij projecten aanpakken en uitvoeren. Wij zorgen voor een optimale samenwerking en een maximale informatievoorziening aan alle betrokkenen. Wij houden meer dan anderen rekening met de omgeving waarin wij uw opdracht uitvoeren.
          </p>
        </div>
      </section>

      {/* News/Werkwijze Section */}
      <section className="section news-section">
        <div className="container">
          <h2>{homepage.news.title}</h2>
          <p className="section-subtitle">{homepage.news.subtitle}</p>
          
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
            <div className="safety-title-image">
              <h2>{homepage.safetySection.title}</h2>
              <div className="safety-image">
                <img src={homepage.safetySection.backgroundImage} alt="Veiligheid" />
              </div>
            </div>
            <div className="safety-text">
              <p>{homepage.safetySection.content}</p>
              <Link to="/contact" className="btn btn-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        className="section final-cta-section"
        style={{
          backgroundImage: `url(${homepage.safetySection.backgroundImage})`
        }}
      >
        <div className="final-cta-inner">
          <div className="final-cta-content">
            <h2>
              Extra tijd,<br />
              <strong>Wanneer elke seconde telt.</strong>
            </h2>
            <Link to="/contact" className="btn btn-large btn-primary">
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
