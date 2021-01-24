import React from 'react';
import NavDropdownItem from './NavDropdownitem';
const NavDropdown = (props) => {
	return (
		<div className={props.texts}>
			<div className='nav-menu'>
				<NavDropdownItem
					leftIcon={<i className='fas fa-globe-europe'></i>}
					rightIcon={<i className='fas fa-chevron-down'></i>}
				>
					Languages
				</NavDropdownItem>
				<NavDropdownItem
					leftIcon={<i className='fas fa-user-plus'></i>}
					linkName='https://edp.geniusplaza.com/signup'
				>
					Sign Up
				</NavDropdownItem>
				<NavDropdownItem
					leftIcon={<i className='fas fa-sign-in-alt'></i>}
					rightIcon={<i className='fas fa-chevron-right'></i>}
					linkName='https://edp.geniusplaza.com/login'
				>
					Login
				</NavDropdownItem>
				<NavDropdownItem
					leftIcon={<i className='fas fa-toolbox'></i>}
					linkName='#tools'
					sett={props.set}
				>
					Our Tools
				</NavDropdownItem>
			</div>
		</div>
	);
};

export default NavDropdown;
