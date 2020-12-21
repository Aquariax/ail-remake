import React from 'react';
import doctor from '../images/genius-doctor-logo.svg';
import village from '../images/genius-village-logo.svg';
import lis from '../images/genius-lis.svg';
import world from '../images/genius-world.svg';

const Card = () => {
	return (
		<div className='full-card'>
			<div className='heading'>
				<h3>Our Other Tools</h3>
				<h5>All tools available in 100+ languages</h5>
			</div>

			<div className='card-area'>
				<div className='card viewing'>
					<div className='card-logo'>
						<img src={doctor} alt='genius doctor logo' />
					</div>
					<div className='card_text'>
						<p className='title'>MANAGE & PROTECT</p>
						<p className='middle'>
							Empowering parents and caregivers to manage the health, education
							and data privacy of their family in a single place. First to serve
							indigenous and native communities in 100+ languages.
						</p>
					</div>
				</div>
				<div className='card'>
					<div className='card-logo'>
						<img src={village} alt='genius village logo' />
					</div>
					<div className='card_text'>
						<p className='title'>MANAGE YOUR SCHOOL(S)</p>
						<p className='middle'>
							The first inclusive & HIPAA Compliant Learning Information System
							(SIS) with a mobile-first parent portal in 100+ languages.
						</p>
					</div>
				</div>
				<div className='card'>
					<div className='card-logo'>
						<img src={lis} alt='genius lis logo' />
					</div>
					<div className='card_text'>
						<p className='title'>MANAGE YOUR CLINIC(S)</p>
						<p className='middle'>
							The first inclusive & FERPA Compliant Electronic Health Record
							(EHR) with a patient portal in 100+ languages.
						</p>
					</div>
				</div>
				<div className='card'>
					<div className='card-logo'>
						<img src={world} alt='genius world logo' />
					</div>
					<div className='card_text'>
						<p className='title'>MAKE LEARNING EASY</p>
						<p className='middle'>
							A single place for students, teachers, parents and school leaders
							to learn and teach together. Easy to use with a single dashboard
							to manage everything without distractions. All in 100+ languages.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
