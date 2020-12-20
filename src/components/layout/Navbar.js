import React from 'react';
import logo from '../images/edp-logo.svg';

const Navbar = () => {
	return (
		<div className='navigation'>
			<div className='logo'>
				<img src={logo} alt='edp-logo' />
			</div>
			<div className='nav'>
				<ul className='nav_menu'>
					<li className='nav_menu_item'>
						<a href='#!'>Language</a>
					</li>
				</ul>
				<ul className='nav_menu second'>
					<li className='nav_menu_item'>
						<a href='#!'>Sign Up</a>
					</li>
					<li className='nav_menu_item'>
						<a href='#!'>Log In</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
