import React from 'react';

const NavDropdownitem = (props) => {
	console.log(props.linkName);
	return (
		<a href={props.linkName} className='nav-item'>
			<span className='nav-button'>{props.leftIcon}</span>
			{props.children}
			<span className='nav-right'>{props.rightIcon}</span>
		</a>
	);
};

export default NavDropdownitem;
