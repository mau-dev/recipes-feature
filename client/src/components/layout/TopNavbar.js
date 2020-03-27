import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import PropTypes from 'prop-types';

import logo from '../../images/abv-logo.png';
import '../../App.scss';

//@to do: finalise the right menu logged in vs logged out
//logged in has: user profilepic, post review/post recipe btn

//profilePic on logged in to lead to: profile route, (inside edit profile route link), user's recipes, user's saved recipes by other, and logout

//logged out: sign up, login links, post a review/recipe btn

//@to-do later: separate components and containers for everything

const TopNavbar = ({auth: {isAuthenticated, loading}, logout}) => {
	return (
		<div>
			<nav className='navbar top-nav'>
				<div className='topNav-menu-left'>
					<Link to='/'>
						<img src={logo} className='abv-logo' alt='logo' />
					</Link>
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
					<ul>
						<li>
							<Link to='/recipes/new' className='post-recipe'>
								Post Recipe
							</Link>
						</li>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/register'>Sign Up</Link>
						</li>
						<li>
							<a onClick={logout} href='#!'>
								Logout
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

TopNavbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, {logout})(TopNavbar);
