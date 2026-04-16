import React from 'react';
import ContactForm from '../components/ContactForm';
import '../pages/Contact.css';

export default function Contact() {
  return (
    <div>
      <section className="section contact">
        <div className="container">
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

      {/* Map Section */}
      <section className="section contact-map">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.8394848404437!2d4.396233!3d51.9180606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b83a3c3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sCornelis%20Houtmanstraat%2011%2C%203124%20LB%20Schiedam%2C%20Netherlands!5e0!3m2!1snl!2snl!4v1616000000000"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="map-iframe"
            title="Secuur BV Locatie"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
