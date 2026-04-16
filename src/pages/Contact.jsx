import React from 'react';
import ContactForm from '../components/ContactForm';
import '../pages/Contact.css';

export default function Contact() {
  return (
    <section className="section contact">
      <div className="container">
        <h1>Contact</h1>
        <p>Neem contact met ons op. We helpen u graag verder!</p>

        <div className="row">
          <div className="col-md-6">
            <ContactForm />
          </div>

          <div className="col-md-6">
            <div className="contact-info">
              <h3>Contact informatie</h3>

              <div className="contact-item">
                <h4>Telefoon</h4>
                <p>
                  <a href="tel:+31103214216">010 321 42 16</a>
                </p>
              </div>

              <div className="contact-item">
                <h4>E-mail</h4>
                <p>
                  <a href="mailto:info@secuurbv.nl">info@secuurbv.nl</a>
                </p>
              </div>

              <div className="contact-item">
                <h4>Adres</h4>
                <p>
                  Cornelis Houtmanstraat 11<br />
                  3124 LB Schiedam<br />
                  Nederland
                </p>
              </div>

              <div className="contact-item">
                <h4>KvK</h4>
                <p>77360672</p>
              </div>

              <div className="contact-item">
                <h4>Openingstijden</h4>
                <p>
                  Maandag t/m vrijdag: 08:00 - 17:00 uur<br />
                  Zaterdag en zondag: gesloten
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
