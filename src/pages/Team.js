import React from 'react';

const teamMembers = [
  {
    name: 'Madhavan',
    role: 'VLSI ',
    image: 'https://randomuser.me/api/portraits/men/39.jpg',
    bio: 'PhD in Microelectronics with 15+ years of industry and academic experience in VLSI and ASIC design.'
  },

{
    name: 'Venkateshan',
    role: 'Embedded Systems & AI/ML',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
    bio: 'Expert in AI and ML. Led 25+ hands-on bootcamps across universities.'
  },
  
];

function Team() {
  return (
    <div className="team-page">
      <h1>Meet Our <strong>Expert Team</strong></h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-img" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
