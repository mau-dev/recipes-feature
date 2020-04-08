import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import {getCurrentProfile} from '../../actions/profile';
import PropTypes from 'prop-types';
import SimpleMenu from './NavDropdown';
import logo from '../../images/abv-logo.png';
import '../../App.scss';
// import Search from '../Search.js';


export const MenuLoggedInUser = () => (
	<div className='topNav-menu-right'>
	<ul>
		<li>
			<Link to='/create-recipe' className='post-recipe'>
				Post Recipe
			</Link>
		</li>
		<li>
			<SimpleMenu />
		</li> 
	
	</ul>
	</div>
);

export const MenuGuestUser  = () => (
	<div className='topNav-menu-right'>
<ul>
<li>
<Link to='/create-recipe' className='post-recipe'>
	Post Recipe
</Link>
</li>
<li>
<Link to='/login'>Login</Link>
</li>
<li>
<Link to='/register'>Sign Up</Link>
</li>

</ul>
</div>
);



const TopNavbar = ({auth: {isAuthenticated, loading}, logout, getCurrentProfile}) => {


	return (
		<div>
			<nav className=' top-nav'>
				<div className='topNav-menu-left'>
					<Link to='/'>
						<img src={logo} className='abv-logo' alt='logo' />
					</Link>
					<div className='search-box-outer'>
						<div className='search-icon-div'>
							<i className='fas fa-search' />
							<div className='search-input-div'>
							<input type='search' placeholder='Search' name='search' className='searchInput' />
							{/* <Search /> */}
							</div>
						</div>
					</div>
				</div>
				{isAuthenticated ? <MenuLoggedInUser /> : <MenuGuestUser /> }
     
				
			</nav>
		</div>
	);
};

TopNavbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, {logout, getCurrentProfile})(TopNavbar);
