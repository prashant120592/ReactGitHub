import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<header>
			<nav className='navbar'>
				<div className='left_part'>
					<Link to='/'>
						<i className='fa fa-github mr-1' aria-hidden='true' />GithubReact
					</Link>
				</div>
				<div className='right_part'>
					<ul className='navbar-nav'>
						<li>
							<Link to='/'>Home</Link>
							<Link to='/About'>About</Link>
							<Link to='/contact'>Contact</Link>
							<Link to='/profile'>Profile</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
