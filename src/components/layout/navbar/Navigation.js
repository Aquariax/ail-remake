import React, { Component } from 'react';
import NavBar from './Navbar';
import NavItem from './NavItem';
import NavLinks from './NavLinks';
import NavDropdown from './NavDropdown';
import logo from '../../images/edp-logo.svg';
class Navigation extends Component {
	render() {
		return (
			<div>
				<NavBar>
					<div className='logo'>
						<img src={logo} alt='edp-logo' />
					</div>
					<NavLinks />
					<NavItem icon={<i className='fas fa-bars special'></i>}>
						<NavDropdown />
					</NavItem>
				</NavBar>
			</div>
		);
	}
}

export default Navigation;
