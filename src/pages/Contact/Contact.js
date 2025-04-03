import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Hostel Administration</h1>
      
      <div className="contact-method">
        <h3>Email</h3>
        <p>hostel@vit.edu.in</p>
        <p>emergency@vit.edu.in</p>
      </div>

      <div className="contact-method">
        <h3>Phone</h3>
        <p>Main Office: +91 44 1234 5678</p>
        <p>Emergency: +91 98765 43210</p>
      </div>

      <div className="contact-method">
        <h3>Address</h3>
        <p>Hostel Block A, VIT University</p>
        <p>Vellore, Tamil Nadu - 632014</p>
      </div>
    </div>
  );
};

export default Contact;