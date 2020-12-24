import React, { useState } from 'react';
import { CardData } from './CardData';

const Card = ({ cards }) => {
	const [current, setCurrent] = useState(0);
	const length = cards.length;
	const nextCard = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevCard = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
	return (
		<div className='full-card'>
			<div className='heading'>
				<h3>Our Other Tools</h3>
				<h5>All tools available in 100+ languages</h5>
			</div>
			<div className='card-area'>
				<i className='fas fa-caret-left' onClick={prevCard}></i>
				{CardData.map((card, index) => {
					return (
						<div className={index === current ? 'card viewing' : 'card'}>
							<div>
								<div className='card-logo'>
									<img src={card.logo} alt='genius doctor logo' key={index} />
								</div>
								<div className='card_text'>
									<p className='title'>{card.title}</p>
									<p className='middle'>{card.text}</p>
									<div className='bottom'>
										<p className='subtext'>Best For:</p>
										<p className='tag'>{card.tag}</p>
										<a href='#!'>Learn More</a>
									</div>
								</div>
							</div>
						</div>
					);
				})}
				<i className='fas fa-caret-right' onClick={nextCard}></i>
			</div>
		</div>
	);
};

export default Card;
