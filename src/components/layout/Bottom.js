import React from 'react';
import data from '../images/edp-data-ownership.svg';
import privacy from '../images/edp-data-privacy.svg';
import opt from '../images/edp-opt.svg';
import disclose from '../images/edp-disclosures.svg';
import protection from '../images/edp-data-protection.svg';
import erasure from '../images/edp-amendments.svg';
import production from '../images/edp-data-production.svg';

const Bottom = () => {
	return (
		<div className='full-bottom'>
			<h3 className='bottom-header'>Practices</h3>
			<div className='bottom'>
				<div className='bottom_item'>
					<div className='image'>
						<img src={data} alt='edp-data' />
					</div>
					<div className='bottom_item_text'>
						<h4>1. DATA OWNERSHIP</h4>
						<p>Recognizing the consumer as the owner of their data</p>
					</div>
				</div>
				<div className='bottom_item'>
					<div className='image'>
						<img src={privacy} alt='edp-privacy' />
					</div>
					<div className='bottom_item_text'>
						<h4>2. DATA PRIVACY OFFICER</h4>
						<p>
							The importance of role visibility and understanding key
							responsibilities
						</p>
					</div>
				</div>
				<div className='bottom_item'>
					<div className='image'>
						<img src={opt} alt='edp-optin' />
					</div>
					<div className='bottom_item_text'>
						<h4>3. “OPT-IN” AND “OPT-OUT”</h4>
						<p>The latest mandates and best practices when selling data</p>
					</div>
				</div>
				<div className='bottom_item'>
					<div className='image'>
						<img src={disclose} alt='edp-disclose' />
					</div>
					<div className='bottom_item_text'>
						<h4>4. DISCLOSURES</h4>
						<p>
							Looking beyond required annual notices to ensure informed
							consumers
						</p>
					</div>
				</div>
				<div className='bottom_item'>
					<div className='image'>
						<img src={protection} alt='edp-protection' />
					</div>
					<div className='bottom_item_text'>
						<h4>5. DATA PROTECTION</h4>
						<p>
							Safeguard measures that comply with state and federal regulations
						</p>
					</div>
				</div>
				<div className='bottom_item'>
					<div className='image'>
						<img src={erasure} alt='edp-erasure' />
					</div>
					<div className='bottom_item_text'>
						<h4>6. ERASURE & AMENDMENTS TO PERSONAL INFORMATION</h4>
						<p>Looking at the needs of both consumers and businesses</p>
					</div>
				</div>
				<div className='bottom_item'>
					<div className='image'>
						<img src={production} alt='edp-production' />
					</div>
					<div className='bottom_item_text'>
						<h4>7. PRODUCTION OF DATA</h4>
						<p>Providing reasonable access and timely information</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bottom;
