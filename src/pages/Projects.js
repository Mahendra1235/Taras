import React from 'react';
import projectBg from '../assets/ComingSoon.png';

const Projects = () => {
  const pageStyle = {
    background: `url(${projectBg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '81vh',
    width: '100vw',
  };

  return (
    <div style={pageStyle}></div>
  );
};

export default Projects;
