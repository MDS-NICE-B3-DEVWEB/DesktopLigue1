import React from 'react';

function ClassementSummary({ team }) {
  return (
    <div className="team-info">
      <img src={team.logo} alt={team.teamName} className="team-logo" />
      <span className="team-name">{team.teamName}</span>
      <span className="points">{team.points} points</span>
    </div>
  );
}

export default ClassementSummary;
