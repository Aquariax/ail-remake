import React from 'react';
import NavLinkItem from './NavLinkItem';

const NavLinks = () => {
	return (
		<div className='nav-links'>
			<NavLinkItem
				linkItem='Languages'
				icon={<i className='fas fa-chevron-down'></i>}
				link='#'
			/>
			<div className='nav-auth'>
				<NavLinkItem
					linkItem='Sign Up'
					class='sign'
					link='https://edp.geniusplaza.com/signup'
				/>
				<NavLinkItem
					linkItem='Login'
					link='https://edp.geniusplaza.com/login'
				/>
			</div>
		</div>
	);
};

export default NavLinks;
