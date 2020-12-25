import React from 'react';
import NavDropdownItem from './NavDropdownitem';

const NavDropdown = () => {
	return (
		<div className='dropdown'>
			<div className='nav-menu'>
				<NavDropdownItem
					leftIcon={<i className='fas fa-globe-europe'></i>}
					rightIcon={<i className='fas fa-chevron-down'></i>}
				>
					Languages
				</NavDropdownItem>
				<NavDropdownItem
					leftIcon={<i className='fas fa-user-plus'></i>}
					rightIcon={<i className='fas fa-chevron-right'></i>}
				>
					Sign Up
				</NavDropdownItem>
				<NavDropdownItem
					leftIcon={<i className='fas fa-sign-in-alt'></i>}
					rightIcon={<i className='fas fa-chevron-right'></i>}
				>
					Login
				</NavDropdownItem>
				<NavDropdownItem leftIcon={<i className='fas fa-toolbox'></i>}>
					Our Tools
				</NavDropdownItem>
			</div>
		</div>
	);
};

export default NavDropdown;
