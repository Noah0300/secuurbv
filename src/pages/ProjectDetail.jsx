import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { siteData } from '../data/siteData';
import Seo from '../components/Seo';
import './Projecten.css';

const getProjectSlug = (project) => {
  if (project.slug) {
    return project.slug;
  }

  if (project.link && project.link.startsWith('/projecten/')) {
    return project.link.replace('/projecten/', '');
  }

  return String(project.id);
};

export default function ProjectDetail() {
  const { projectSlug } = useParams();
  const project = siteData.projects.find((item) => getProjectSlug(item) === projectSlug);

  if (!project) {
    return (
      <section className="section project-detail-section">
        <Seo
          title="Project niet gevonden"
          description="Het opgevraagde project bestaat niet of is verplaatst. Bekijk alle projecten van Secuur Brandveiligheid."
          noIndex={true}
        />
        <div className="container project-detail-container">
          <h1>Project niet gevonden</h1>
          <p>Dit project bestaat niet of is verplaatst.</p>
          <Link to="/projecten" className="btn btn-primary">
            Terug naar projecten
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div>
      <Seo
        title={`${project.title} | Project Secuur Brandveiligheid`}
        description={project.excerpt || 'Project van Secuur Brandveiligheid op het gebied van passieve en bouwkundige brandveiligheid.'}
        keywords={`projectdetail brandveiligheid, ${project.title.toLowerCase()}, referentie brandveiligheid`}
        type="article"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Projecten', path: '/projecten' },
          { name: project.title, path: `/projecten/${projectSlug}` }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: project.title,
          serviceType: 'Brandveiligheidsproject',
          provider: {
            '@type': 'Organization',
            name: 'Secuur Brandveiligheid B.V.'
          },
          areaServed: 'Nederland',
          url: `https://www.secuurbv.nl/projecten/${projectSlug}`,
          description: project.excerpt || 'Project van Secuur Brandveiligheid op het gebied van passieve en bouwkundige brandveiligheid.'
        }}
      />

      <section className="section project-detail-section">
        <div className="container project-detail-container">
          <div className="project-detail-grid">
            <div className="project-detail-text">
              <h1>{project.title}</h1>
              <p className="project-detail-content">{project.content}</p>
              <Link to="/projecten" className="btn btn-secondary">
                Terug naar projecten
              </Link>
            </div>
            <div className="project-detail-media">
              <img src={project.image} alt={project.title} className="project-detail-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
