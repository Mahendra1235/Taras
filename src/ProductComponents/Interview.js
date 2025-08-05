import React, { useState } from 'react';
import '../App.css';

function Interview() {
  const [showContacts, setShowContacts] = useState(false);

  const handleClick = () => {
    setShowContacts(!showContacts);
  };

  return (
    <div className="interview-container">
      <h2 className="interview-heading">Interview Preparation</h2>
      <p className="interview-description">
        Resources and mock interviews to prepare for core technical job roles.
      </p>

      <button onClick={handleClick} className="toggle-button">
        {showContacts ? 'Hide Contact Info' : 'Need Guidance or Study Material?'}
      </button>

      {showContacts && (
        <div className="contact-box">
          <h4>Contact Persons (Paid Services)</h4>
          <ul>
            <li>
              <strong>John Doe</strong> – Interview Coach<br />
              Email: john.doe@example.com<br />
              WhatsApp: +1234567890
            </li>
            <li>
              <strong>Jane Smith</strong> – Study Material Provider<br />
              Email: jane.smith@example.com<br />
              WhatsApp: +1234567890
            </li>
          </ul>
          <p className="contact-warning">
            * Please note: These services are paid.
          </p>
        </div>
      )}
    </div>
  );
}

export default Interview;
