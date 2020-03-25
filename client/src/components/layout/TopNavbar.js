import React from 'react';

import logo from '../../images/abv-logo.png';
import '../../App.scss';
// import { FaSearch } from 'react-icons/fa';


//@to do: finalise the right menu logged in vs logged out
//logged in has: user profilepic, post review/post recipe btn
//logged out: sign up, login links, post a review/recipe btn

//@to-do later: separate components and containers for everything

const TopNavbar = () => {
	return (
		<div>
			<nav className='navbar top-nav'>
				<div className='topNav-menu-left'>
					<img src={logo} className='abv-logo' alt='logo' />
					<div className='search-box-outer'>
						<div className='search-icon-div'>
							<i className='fas fa-search' />
							<div className='search-input-div'>
								<input type='search' placeholder='Search' name='search' className='searchInput' />
							</div>

						</div>
					</div>
				</div>
				<div className='topNav-menu-right'>
					<img src={logo} className='abv-logo' alt='logo' />
					<div className='search-box-outer'>
						<div className='search-icon-div'>
							<i className='fas fa-search' />
							<div className='search-input-div'>
								<input type='search' placeholder='Search' name='search' className='searchInput' />
							</div>

						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default TopNavbar;
