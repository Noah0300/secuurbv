import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import FinalCtaBanner from '../components/FinalCtaBanner';
import Seo from '../components/Seo';
import './Projecten.css';

export default function Projecten() {
  const { projects } = siteData;

  const getProjectSlug = (project) => {
    if (project.slug) {
      return project.slug;
    }

    if (project.link && project.link.startsWith('/projecten/')) {
      return project.link.replace('/projecten/', '');
    }

    return String(project.id);
  };

  return (
    <div>
      <Seo
        title="Projecten"
        description="Bekijk projecten van Secuur Brandveiligheid voor gemeentes, zorginstellingen, VvE's, woningcorporaties en aannemers. Wij realiseren veilige, brandvertragende oplossingen met minimale overlast."
        keywords="projecten brandveiligheid, referenties brandveiligheid, brandveiligheidsprojecten zorginstellingen, brandveiligheid VvE"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Projecten', path: '/projecten' }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Brandveiligheidsprojecten',
          serviceType: 'Projecten passieve en bouwkundige brandveiligheid',
          provider: {
            '@type': 'Organization',
            name: 'Secuur Brandveiligheid B.V.'
          },
          areaServed: 'Nederland',
          url: 'https://www.secuurbv.nl/projecten',
          description: 'Referentieprojecten van Secuur Brandveiligheid voor veilige gebouwen en succesvolle brandveiligheidsprojecten.'
        }}
      />

      {/* Header Section */}
      <section className="section page-header projects-header-section">
        <div className="container">
          <h1>Neem een kijkje tussen onze projecten</h1>
          <p className="subtitle projects-intro-text">
            Wij werken vooral voor gemeentes, zorginstellingen, VvE’s, woningcorporaties en aannemers. Ook andere opdrachtgevers helpen wij graag met een passende oplossing voor hun brandveiligheidsvraagstuk.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section projects-grid-section projects-cards-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <Link to={`/projecten/${getProjectSlug(project)}`} className="project-image-link">
                  <img src={project.image} alt={project.title} className="project-image" />
                </Link>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.excerpt}</p>
                  <Link to={`/projecten/${getProjectSlug(project)}`} className="btn btn-primary">
                    Lees meer
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaBanner />
    </div>
  );
}
