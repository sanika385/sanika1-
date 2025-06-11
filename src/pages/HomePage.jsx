import React from 'react';
import './HomePage.css';
import Header from '../componants/header/Header';
import { Link } from 'react-router-dom';




const HomePage = () => {
  return (
    <div className="home-container">
      <div id="root">
        <section
            className="main-section"
            style={{
          backgroundImage:  "url('/images/college-banner-Cz0xylpt.png')",

         
        }}
      >
        </section>
            <div className="main-overlay">
                <h1>Welcome to Vivekanand College</h1>
                <section></section>
                <p>Your journey to excellence starts here.</p>
                <Link to="/apply" className="apply-button">Apply Now!</Link><br/>
            </div>
            <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped</p>
                <h2>Why Choose Vivekanand College?</h2>
                <hr/>
                <ul>
                   <li> *Legacy of Excellence:* Decades of commitment to quality education.</li>
                    <li> *Experienced Faculty:* Learn from renowned experts and passionate educators.</li>
                    <li> *Modern Facilities:* Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li> *Holistic Development:* Focus on co-curricular activities, sports, and community service.</li>
                    <li>*Strong Placements:* Excellent career opportunities with leading companies.</li>
               </ul>
               <h2>Campus Life & Facilities</h2>
               <hr/>
            </div>
            
            <div id="back">
              <section
                className="back-section"
                style={{
                backgroundImage:  "url('campus-life-Crkero7B.jpg')",}}>
              </section>
            </div>
    </div>
  ); 
};

export default HomePage;

                