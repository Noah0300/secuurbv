import React from 'react';
import { Link } from 'react-router-dom';
import FinalCtaBanner from '../components/FinalCtaBanner';
import Seo from '../components/Seo';
import './Projecten.css';

export default function Vacatures() {
  return (
    <div>
      <Seo
        title="Vacatures"
        description="Bekijk de actuele vacatures bij Secuur Brandveiligheid of neem contact op voor een open sollicitatie. Wij zoeken vakmensen voor passieve en bouwkundige brandveiligheid."
        keywords="vacatures brandveiligheid, werken bij Secuur Brandveiligheid, open sollicitatie brandveiligheid, brandveiligheid banen"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Vacatures', path: '/vacatures' }
        ]}
      />

      {/* Header Section */}
      <section className="section page-header projects-header-section">
        <div className="container">
          <h1>Neem een kijkje tussen onze vacatures</h1>
          <p className="subtitle projects-intro-text">
            Dagelijks werken wij voor gemeentes, zorginstellingen, VvE’s, woningcorporaties en aannemers. Ook andere opdrachtgevers kunnen rekenen op onze expertise, zodat mensen meer tijd krijgen om veilig weg te komen.
          </p>
        </div>
      </section>

      {/* No Vacancies Block */}
      <section className="section projects-grid-section projects-cards-section">
        <div className="container">
          <div className="vacancies-empty-state">
            <div className="vacancies-empty-state-main">
              <p className="vacancies-empty-state-label">Vacatures</p>
              <h2>Op dit moment hebben wij geen openstaande vacatures</h2>
              <p className="vacancies-empty-state-text">
                Denk je dat je goed bij Secuur Brandveiligheid past? Neem gerust contact met ons op.
                We maken graag kennis en bekijken samen de mogelijkheden.
              </p>
              <div className="vacancies-empty-state-actions">
                <Link to="/contact" className="btn btn-primary vacancies-empty-state-btn">
                  Neem contact op
                </Link>
              </div>
            </div>

            <aside className="vacancies-empty-state-side">
              <p className="vacancies-side-kicker">Wij denken graag mee</p>
              <h3>Open sollicitatie</h3>
              <p>
                Ook zonder openstaande vacature staan we open voor gemotiveerde vakmensen.
              </p>
              <a href="tel:+31103214216" className="vacancies-side-contact">010 321 42 16</a>
              <a href="mailto:info@secuurbv.nl" className="vacancies-side-contact">info@secuurbv.nl</a>
            </aside>
          </div>
        </div>
      </section>

      <FinalCtaBanner />
    </div>
  );
}
