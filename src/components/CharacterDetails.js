import React from 'react';
import '../styles/components/CharacterDetails.scss';

const CharacterDetails = ({ name, status, gender, origin, theme }) => {
	return (
		<section className={`details ${theme}`}>
			<span className='char-name'>{name}</span>
			<span>
				<span className={status.toLowerCase()}>{status}</span>- {gender}
			</span>
			<span>{origin.name}</span>
		</section>
	);
};

export default CharacterDetails;
