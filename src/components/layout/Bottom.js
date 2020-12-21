import React from 'react';
import data from '../images/data-ownership.png';
import privacy from '../images/data-privacy.png';
import opt from '../images/opt-in.png';
import disclose from '../images/disclosures.png';
import protection from '../images/data-protection.png';
import erasure from '../images/erasure.png';
import production from '../images/production.png';

const Bottom = () => {
	return (
		<div className='bottom'>
			<div className='bottom_item'>
				<div className='image special'>
					<img src={data} alt='edp-data' />
				</div>
				<div className='bottom_item_text'>
					<h4>1. DATA OWNERSHIP</h4>
					<p>Recognizing the consumer asthe owner of his/her data</p>
				</div>
			</div>
			<div className='bottom_item'>
				<div className='image'>
					<img src={privacy} alt='edp-privacy' />
				</div>
				<div className='bottom_item_text'>
					<h4>2. DATA PRIVACY OFFICER</h4>
					<p>
						The importance of role visibility andunderstanding key
						responsibilities
					</p>
				</div>
			</div>
			<div className='bottom_item'>
				<div className='image special'>
					<img src={opt} alt='edp-optin' />
				</div>
				<div className='bottom_item_text'>
					<h4>3. “OPT-IN” AND “OPT-OUT”</h4>
					<p>The latest mandates and bestpractices when selling data</p>
				</div>
			</div>
			<div className='bottom_item'>
				<div className='image'>
					<img src={disclose} alt='edp-disclose' />
				</div>
				<div className='bottom_item_text'>
					<h4>4. DISCLOSURES</h4>
					<p>
						Looking beyond required annualnotices to ensure informed consumers
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
						Safeguard measures that complywith state and federal regulations
					</p>
				</div>
			</div>
			<div className='bottom_item'>
				<div className='image'>
					<img src={erasure} alt='edp-erasure' />
				</div>
				<div className='bottom_item_text'>
					<h4>6. ERASURE & AMENDMENTSTO PERSONAL INFORMATION</h4>
					<p>Looking at the needs of bothconsumers and businesses</p>
				</div>
			</div>
			<div className='bottom_item'>
				<div className='image special'>
					<img src={production} alt='edp-production' />
				</div>
				<div className='bottom_item_text'>
					<h4>7. PRODUCTION OF DATA</h4>
					<p>Providing reasonable accessand timely information</p>
				</div>
			</div>
		</div>
	);
};

export default Bottom;
