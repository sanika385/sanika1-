import React from 'react';
import './ContactUsPage.css'; 

const ContactUsPage = () => {
  return (
    <div className="contact-us-container">
      <div className="page-container" style={{ overflow: 'auto' }}>

      <h1 >Contact Us</h1>

      <p className="contact-us-intro">
        We'd love to hear from you! Whether you have questions about admissions, programs, or campus
        life, our team is here to help.
      </p>

      <section className="general-enquiries">

        <h2>General Enquiries</h2>

        <p><strong>Vivekanand College Main Campus</strong></p>
        <p>[Your College Full Address Here, e.g. Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]</p>
        <p>India</p>
        <p>Phone: *+91 12345 67890*</p>
        <p>Email: *info@vivekanandcollege.edu*</p>
        <p>Office Hours: Monday - Friday 9:00 AM - 5:00 PM IST</p>
      </section>

      <section className="admissions-office">
        <h2>Admissions Office</h2>
        
        <p>For admission-related queries, please reach out to our admissions team.</p>
        <p>Phone: *+91 98765 43210*</p>
        <p>Email: *admissions@vivekanandcollege.edu*</p>
      </section>

      
      <section className="contact-section">
        <h2>Student Support Services</h2>
        <p>For current student support, academic advising, or general assistance:</p>
        <p>Phone: *+91 87654 32109*</p>
        <p>Email: *studentsupport@vivekanandcollege.edu*</p>
      </section>

      
      <section className="map-section">
        <h2>Find Us on the Map</h2>
        <p>You can embed a Google Map here later using an iframe or a React map library.</p>
        <p><a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
      </section>

      
      <section className="message-section">
        <h2>Send Us a Message</h2>
        
        <p>Please use the form below to send us a message. We will get back to you as soon as possible.</p>
        
      </section>

    
      
      
      </div>

    </div>
  );
};

export default ContactUsPage;