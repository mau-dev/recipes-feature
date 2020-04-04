import React from "react";
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import {getCurrentProfile} from '../../actions/profile';

const SimpleMenu  = ({auth: {isAuthenticated, loading}, logout, getCurrentProfile}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ()  => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        style={{
          border: "none",
          backgroundColor: "transparent",
          style: "none",
          outline: "none"
        }}
        onClick={handleClick}
      >
        <div style={{ borderRadius: "50%" }}>
          <img width="48px" src="https://i.imgur.com/Vnu8YAb.png?1" />
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to='/profile-me'>Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/recipes-me'>My recipes</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/profile-me'>Saved Recipes</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/create-profile'>Settings</Link></MenuItem>
        <MenuItem onClick={handleClose}><a onClick={logout} href='#!'>Logout</a></MenuItem>
      </Menu>
    </div>
  );
}

SimpleMenu.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, {logout, getCurrentProfile})(SimpleMenu);

