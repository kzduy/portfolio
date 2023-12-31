//create a navbar component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { Button } from './Button';

function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='nav-links' onClick={closeMobileMenu}>
						Kh Duy
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>

						<li className='nav-item'>
							<a href="#project-section" className='nav-links' onClick={closeMobileMenu}>
								Projects
							</a>
						</li>
						<li className='nav-item'>
							<a href="#contact-section" className='nav-links' onClick={closeMobileMenu}>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;