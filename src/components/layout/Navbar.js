import React from 'react';
import logo from '../images/edp-logo-2.svg';

const Navbar = () => {
	return (
		<div className='navigation'>
			<div className='logo'>
				<img src={logo} alt='edp-logo' className='logo-main' />
			</div>
			<div className='nav'>
				<ul className='nav_menu'>
					<li className='nav_menu_item button'>
						<p>
							Language <i className='fas fa-angle-down lang'></i>
						</p>
					</li>
				</ul>
				<ul className='nav_menu second'>
					<li className='nav_menu_item sign-up'>
						<a href='#!'>Sign Up</a>
					</li>
					<li className='nav_menu_item login'>
						<a href='#!'>Log In</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
