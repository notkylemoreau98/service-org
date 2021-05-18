import React from 'react';
import './styles/TeamMember.css';

function TeamMember({ image, name, role}) {
	return (
		<div className="teamMember">
			<img src={image} alt={name} />

			<div className="teamMember__accentLine"></div>
			
			<h3>{name}</h3>
			<p>{role}</p>
			
		</div>
	)
}

export default TeamMember
