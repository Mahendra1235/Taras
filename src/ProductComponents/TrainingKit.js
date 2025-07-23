import React from 'react';
import comingSoonImg from '../assets/ComingSoon.png';

function TrainingKit() {
  return (
    <div>
      <h2>Training Kits</h2>
      <p>Explore our hands-on training kits for VLSI, Embedded Systems, and AI/ML.</p>
      <img src={comingSoonImg} alt="Coming Soon" className="training-image" />
    </div>
  );
}

export default TrainingKit;
