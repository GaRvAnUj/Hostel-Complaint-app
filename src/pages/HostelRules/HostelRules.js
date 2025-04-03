import React from 'react';
import './HostelRules.css';

const HostelRules = () => {
  return (
    <div className="rules-container">
      <h1>Hostel Rules & Guidelines</h1>
      
      <div className="rule-section">
        <h2>Timings</h2>
        <ul>
          <li>Curfew: 11:00 PM to 5:00 AM</li>
          <li>Visiting hours: 4:00 PM to 7:00 PM</li>
        </ul>
      </div>

      <div className="rule-section">
        <h2>Prohibited Items</h2>
        <ul>
          <li>Electric heaters/kettles</li>
          <li>Alcohol and drugs</li>
        </ul>
      </div>

      <div className="rule-section">
        <h2>Common Areas</h2>
        <ul>
          <li>Clean after use</li>
          <li>No noise after 10 PM</li>
        </ul>
      </div>
    </div>
  );
};

export default HostelRules;