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
				<NavLinkItem linkItem='Sign Up' link='#' class='sign' />
				<NavLinkItem linkItem='Login' link='#!' />
			</div>
		</div>
	);
};

export default NavLinks;
