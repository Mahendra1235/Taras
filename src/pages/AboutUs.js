import React from 'react';
import FounderImage from '../taras-image.jpg'


const AboutUs = () => {
  return (
    <section className="about-container">
      <h1>About Us</h1>
      <p>
        We specialize in skill development and training, providing trained engineers to industries
        working on the latest core engineering technologies. In the past six years, we have trained
        over 90,000 engineers. We bridge academia‑industry gaps by developing innovative programs,
        and setting up advanced industrial labs in VLSI, FPGA, IoT, AI, Cloud, RISC‑V, Embedded,
        Robotics & Automation at universities with the help of our technical leaders.
      </p>

      <div className="founder">
  <div className="founder-content">
    <h2>About the Founder</h2>
    <p>
      TARAS SYSTEMS AND SOLUTIONS was founded by professionals with 25+ years of industry
      experience. The company is led by Dr. K. Thanushkodi, former Anna University Syndicate
      member, with 40+ years in government and private engineering institutes.
    </p>
  </div>
  <img src={FounderImage} alt="Founder Dr.K.Thanushkodi" className="founder-img" />
</div>


      <div className="qualities">
        <h2>Our Approach</h2>
        <ul>
          <li>High skill development through measurable transformation</li>
          <li>Flexible, tailormade programs with critical thinking & decision‑making focus</li>
          <li>Industry‑engaged learning via domain expert sessions and networking opportunities </li>
        </ul>
      </div>

      <div className="vision-mission">
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To be the leading provider of IT & semiconductor‑design training solutions, empowering
            individuals and organizations in Bangalore and beyond, while fostering a culture of continuous
            learning and driving technological advancement :contentReference.
          </p>
        </div>
        <div className="mission">
          <h3>Our Mission</h3>
          <ul>
            <li>Empower clients with innovative solutions that enhance business performance</li>
            <li>Provide top‑tier hands‑on training in VLSI, Embedded Systems, AI, IoT, Wireless, Automation & Cloud</li>
            <li>Cultivate curiosity, creativity, and practical application for learners</li>
          </ul>
        </div>
      </div>

      <div className="contact-footer">
        <h2>Contact Us</h2>
        <p>Office: Bengaluru</p>
        <p>Phone: +91 78455 50414</p>
        <p>Email: shriram@tarassolutions.com, HR@tarassolutions.com, Madhav.s@tarassolutions.com</p>
      </div>
    </section>
  );
};

export default AboutUs;
