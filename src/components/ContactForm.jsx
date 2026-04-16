import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Vul uw naam in alstublieft.' });
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Voer een geldig e-mailadres in.' });
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Vul uw bericht in alstublieft.' });
      setIsSubmitting(false);
      return;
    }

    try {
      // In production: send to backend/email service
      // For now: simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form submitted:', formData);
      setStatus({
        type: 'success',
        message: 'Bedankt! We nemen zo snel mogelijk contact op.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });

      // Clear message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Er is een fout opgetreden. Probeer het later opnieuw.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Contactformulier</h3>

      {status && (
        <div className={`form-message form-${status.type}`}>
          {status.message}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">Naam *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mailadres *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefoonnummer</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Bedrijf</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Onderwerp</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Bericht *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="form-control"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary"
      >
        {isSubmitting ? 'Verzenden...' : 'Verzenden'}
      </button>
    </form>
  );
}
