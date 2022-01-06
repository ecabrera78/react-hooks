import React, { useContext } from 'react';
import CharacterDetails from './CharacterDetails';

import '../styles/components/Character.scss';
import { ThemeContext } from '../context/ThemeContext';

const Character = props => {
	const [{ theme }] = useContext(ThemeContext);

	return (
		<article className={`char-container ${theme}`}>
			<section className='char-container__header'>
				<img src={props.image} alt='Character img'></img>
			</section>
			<CharacterDetails {...props} theme={theme} />
		</article>
	);
};

export default Character;
