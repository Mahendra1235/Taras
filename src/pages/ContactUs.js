import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">

        {/* Left: Contact Information */}
        <div className="contact-info card">
          <h2>Contact Information</h2>
          <p className="contact-desc">
            Feel free to reach out with any questions about the book, speaking engagements, or media inquiries.
          </p>

          <div className="info-item">
            <span className="icon email-icon" aria-label="email">&#9993;</span>
            <div>
              <strong>Email:</strong><br />
             <div className="contact-emails">
                <a href="mailto:shriram@tarassolutions.com" className="contact-link">shriram@tarassolutions.com</a><br />
                <a href="mailto:HR@tarassolutions.com" className="contact-link">HR@tarassolutions.com</a><br />
                <a href="mailto:Madhav.s@tarassolutions.com" className="contact-link">Madhav.s@tarassolutions.com</a>
             </div>

            </div>
          </div>

          <div className="info-item">
            <span className="icon phone-icon" aria-label="phone">&#9742;</span>
            <div>
              <strong>Phone:</strong><br />
              +91 7845550414

            </div>
          </div>

          <div className="info-item">
            <span className="icon location-icon" aria-label="address">&#9873;</span>
            <div>
              <strong>Address:</strong><br />
              123 Book Street, Literary Lane<br />
              Wordsmith City, NY 10001
            </div>
          </div>

          
        </div>
        {/* Right: Contact Form */}
        <form className="contact-form card" onSubmit={e => e.preventDefault()}>
          <div className="form-row">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Name*" />
          </div>

          <div className="form-row">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="john@example.com*" />
          </div>

          <div className="form-row full-width">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Your Subject" />
          </div>

          <div className="form-row full-width">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message here...*" />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
