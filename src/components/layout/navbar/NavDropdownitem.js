import React from 'react';

const NavDropdownitem = (props) => {
	return (
		<a href='#' className='nav-item'>
			<span className='nav-button'>{props.leftIcon}</span>
			{props.children}
			<span className='nav-right'>{props.rightIcon}</span>
		</a>
	);
};

export default NavDropdownitem;
