import React from 'react';
import '../styles/styles.css'; // Import custom CSS file for ContactUs styles

const ContactUs = () => {
  return (
    <div className="contact__container">
      {/* Content on the left side for large devices */}
      <div className="contact__content">
        <h2 className="contact__title">Contact Us</h2>
        <div className="faq__section">
        <h3>Frequently Asked Questions</h3>
        <p>
          <strong>How can I support orphanages?</strong>
          <br />
          You can provide financial assistance, volunteering, or donations of goods and services to the orphanages of your choice by contacting the orphanage owners through our platform.
        </p>
        <p>
          <strong>Can I access the platform on mobile?</strong>
 import React from 'react';
import '../styles/styles.css'; // Import custom CSS file for ContactUs styles

const ContactUs = () => {
  return (
    <div className="contact__container">
      {/* Content on the left side for large devices */}
      <div className="contact__content">
        <h2 className="contact__title">Contact Us</h2>
        <div className="faq__section">
        <h3>Frequently Asked Questions</h3>
        <p>
          <strong>How can I support orphanages?</strong>
          <br />
          You can provide financial assistance, volunteering, or donations of goods and services to the orphanages of your choice by contacting the orphanage owners through our platform.
        </p>
        <p>
          <strong>Can I access the platform on mobile?</strong>
          <br />
          Yes! Our platform is mobile-responsive, allowing you to access and engage with the community while on the go.
        </p>
        {/* Add more FAQs if needed */}
      </div>
        {/* Add more content here if needed */}
      </div>

      {/* Form on the right side for large devices */}
      <div className="contact__form">
        <form>
          <h3>Get in Touch</h3>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Frequently Asked Questions */}
      
    </div>
  );
};

export default ContactUs;
