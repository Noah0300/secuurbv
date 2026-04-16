import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import './Contact.css';

export default function Projecten() {
  const { projects } = siteData;

  return (
    <div>
      {/* Header Section */}
      <section className="section page-header">
        <div className="container">
          <h1>Neem een kijkje tussen onze projecten</h1>
          <p className="subtitle">
            Wij werken voornamelijk voor Gemeentes, Zorginstellingen, Verenigingen van Eigenaren (VVE's), 
            Woningcorporaties en aannemers. Maar ook andersoortige opdrachtgevers helpen we graag om veiligheid 
            een tijd te geven. Wat je vraag ook is, samen realiseren we een passende oplossing voor de gewenste veiligheid.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <Link to={`/projecten/${project.id}`} className="project-image-link">
                  <img src={project.image} alt={project.title} className="project-image" />
                </Link>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.excerpt}</p>
                  <Link to={`/projecten/${project.id}`} className="btn btn-primary">
                    Lees meer
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
