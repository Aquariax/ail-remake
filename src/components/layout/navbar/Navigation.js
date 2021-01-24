import React, { useState } from 'react';
import NavBar from './Navbar';
import NavItem from './NavItem';
import NavLinks from './NavLinks';
import NavDropdown from './NavDropdown';
import logo from '../../images/edp-logo.svg';
const Navigation = () => {
	const [state, setState] = useState({
		open: false,
		text: 'dropdown',
	});
	const setter = () => {
		!state.open
			? setState({ open: true, text: 'dropdownClose' })
			: setState({ open: false, text: 'dropdown' });
	};

	return (
		<div>
			<NavBar>
				<div className='logo'>
					<img src={logo} alt='edp-logo' />
				</div>
				<NavLinks />
				<NavItem
					icon={<i className='fas fa-bars special'></i>}
					set={setter}
					opened={state.open}
				/>
				<NavDropdown texts={state.text} />
			</NavBar>
		</div>
	);
};

export default Navigation;
