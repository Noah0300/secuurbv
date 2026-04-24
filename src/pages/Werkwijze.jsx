import React from 'react';
import { Link } from 'react-router-dom';
import './Werkwijze.css';

export default function Werkwijze() {
  const sections = [
    {
      title: 'Onze werkwijze',
      text: 'Bij Secuur Brandveiligheid draait het niet alleen om brandveiligheid, maar ook om de mensen in het pand. Of het nu gaat om bewoners, clienten, patienten of gebruikers: wij werken met aandacht voor hun belangen en beperken overlast zoveel mogelijk.'
    },
    {
      title: 'Onderzoek en plan van aanpak',
      text: 'Wij starten waar nodig met een onderzoek of brandscan, zodat risico\'s en gebreken vroegtijdig in beeld zijn. Op basis daarvan stellen we samen met u een praktisch en technisch haalbaar plan van aanpak op, inclusief passende materialen, certificeringen en een duidelijke prijsopgave.'
    },
    {
      title: 'Uitvoering met minimale overlast',
      text: 'Tijdens de uitvoering zorgen wij voor heldere communicatie, goede afstemming en een zorgvuldige planning. Zo weten alle betrokkenen wat er gebeurt en wanneer. Overlast voorkomen of beperken is daarbij steeds een belangrijk uitgangspunt.'
    },
    {
      title: 'Kwaliteitsborging en digitaal logboek',
      text: 'De kwaliteit van ons werk bewaken we met interne controles, steekproeven en digitale vastlegging. Via een digitaal logboek leggen wij de uitgevoerde werkzaamheden, toegepaste materialen, certificaten en foto\'s overzichtelijk vast. Zo is de voortgang en kwaliteit van het werk real time inzichtelijk.'
    },
    {
      title: 'Afronding en eindrapport',
      text: 'Na afronding ontvangt u een compleet eindrapport. Daarmee is direct aantoonbaar dat de werkzaamheden correct en met gecertificeerde materialen zijn uitgevoerd. Desgewenst verzorgen wij ook de afstemming met het bevoegd gezag. Zo maken wij brandveiligheid niet alleen technisch goed geregeld, maar ook praktisch en overzichtelijk georganiseerd.'
    }
  ];

  return (
    <div className="werkwijze-page">
      <section className="section page-header werkwijze-header">
        <div className="container">
          <h1>Onze werkwijze</h1>
          <p className="subtitle">
            Een duidelijke aanpak in een logische volgorde, met aandacht voor veiligheid,
            planning en de mensen in het gebouw.
          </p>
        </div>
      </section>

      <section className="section werkwijze-content">
        <div className="container">
          <div className="werkwijze-flow">
            {sections.map((section, index) => (
              <article key={section.title} className="werkwijze-block">
                <div className="werkwijze-step">{index + 1}</div>
                <div className="werkwijze-block-content">
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container">
          <h2>Extra tijd, elke seconde telt.</h2>
          <Link to="/contact" className="btn btn-large">
            Neem contact op
          </Link>
        </div>
      </section>
    </div>
  );
}
