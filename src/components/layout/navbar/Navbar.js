import React from 'react';

const Navbar = (props) => {
	return (
		<div className='navbar'>
			<ul className='navbar-nav'>{props.children}</ul>
		</div>
	);
};

export default Navbar;
