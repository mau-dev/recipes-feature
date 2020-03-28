import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getCurrentProfile} from '../../actions/profile';

const ProfileDashboard = ({getCurrentProfile, auth: {user}, profile: {profile, loading}}) => {
	useEffect(
		() => {
			getCurrentProfile();
		},
		[ getCurrentProfile ]
	);

	return (
		<Fragment>
			{profile !== null ? (
				<Fragment>
					{/* <img src={user.profilePicture} /> */}
					<h1>{profile.fullName} </h1>
					<h1>{profile.identity} </h1>
					<h1>{profile.home} </h1>
					<h1>{profile.bio} </h1>
				</Fragment>
			) : (
				<Fragment>
					<p>Welcome {user && user.username}</p>
					<p>You have no profile yet.</p>
					<Link to='/create-profile'>Create Profile</Link>
				</Fragment>
			)}
		</Fragment>
	);
};

ProfileDashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, {getCurrentProfile})(ProfileDashboard);
