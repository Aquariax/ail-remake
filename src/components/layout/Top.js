import React from 'react';
import hands from '../images/edp-hands.svg';
import wrench from '../images/edp-wrench.svg';
import language from '../images/edp-languages.svg';
import security from '../images/edp-security.svg';
const Top = () => {
	return (
		<div className='fulltop'>
			<h2 className='top-header'>Ethical Data Partners</h2>
			<div className='top'>
				<div className='top_item'>
					<img src={hands} alt='edp hands icon' />
					<p>
						Give the confidence to your education and health leaders that you
						will protect the data privacy of their families.
					</p>
				</div>
				<div className='top_item'>
					<img src={wrench} alt='edp wrench icon' />
					<p>
						Set up all the required tools to become an inclusive Ethical Data
						Partner.
					</p>
				</div>
				<div className='top_item'>
					<img src={language} alt='edp language icon' />
					<p>
						Communicate with your families in over 100 languages and break the
						barrier of languages and technology.
					</p>
				</div>
				<div className='top_item'>
					<img src={security} alt='edp security icon' />
					<p>
						Run regular data privacy audits and put them in practice to prevent
						privacy violations, expensive penalties, and losing clients.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Top;
