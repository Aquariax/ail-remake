import React from 'react';
import logo from '../images/footer-genius-plaza-logo.svg';

const Footer = () => {
	return (
		<div>
			<div className='footer'>
				<div className='footer_sec about'>
					<img src={logo} alt='footer logo' className='logo2' />
					<p>
						Genius Plaza Ignites the genius in every child using technology to
						protect, track and improve the health and education of communities
						around the world, especially the most underserved.
					</p>
				</div>
				<div className='footer_sec contact '>
					<h3>Get in touch</h3>
					<a href='#!'>
						<i className='fas fa-envelope'></i> info@geniusplaza.com
					</a>
					<a href='https://www.geniusplaza.com/en/'>
						<i className='fas fa-globe'></i> geniusplaza.com
					</a>
					<a href='https://www.google.com/maps/place/Genius+Plaza/@25.7834228,-80.1923258,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b73ac8e9fd17:0xc3b78d993ce2982c!8m2!3d25.7834228!4d-80.1901371'>
						<i className='fas fa-map-marker-alt'></i> 990 Biscayne Blvd Suite
						401 Miami, FL 33132
					</a>
				</div>
				<div className='footer_sec info'>
					<h3>Useful Links</h3>
					<a href='https://jobs.geniusplaza.com/'>
						<i className='fas fa-user'></i> Careers
					</a>
					<a href='https://geniusplaza.zendesk.com/hc/en-us'>
						<i className='fas fa-book'></i> FAQ
					</a>
				</div>
			</div>
			<div className='footer_extension'>
				<div>
					<p>Copyright © Genius Plaza, All rights reserved</p>
				</div>
				<div className='footer_extension_row'>
					<a href='https://www.geniusplaza.com/privacy'>Privacy Policy</a>
					<p>
						<strong>|</strong>
					</p>
					<a href='https://www.geniusplaza.com/terms'>Terms and condiotions</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
