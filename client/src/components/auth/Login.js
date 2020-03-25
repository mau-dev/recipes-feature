import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

// @to do: change it to auth modal, pop up instead of separate route
// login with email & password only, to match abilionveg existing method,
// username and profilePicture will be moved from the user model to the profile model

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e =>{
    e.preventDefault();
    console.log('Successfully logged in!!');
  };


  return (
    <div className="form-wrap">
      <h1 className="text-center">Sign In</h1>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="8"
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="text-center">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;