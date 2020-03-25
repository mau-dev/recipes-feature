import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// @to do: change it to auth modal, pop up instead of separate route
// @to do later: change the user model with email and password only to match abilionveg existing,
// move username and profilePicture to profile model to not be part of the auth

const Register = () => {
{/* the default values  */}
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
 {/*  destructure the formData object  */}
  const { username, email, password, password2 } = formData;
{/* e.target any key-value pair for every field change from below inputs */}
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
{/* change action in the form with onSubmit, make sure the passwords match */}
  const onSubmit = async e =>{
    e.preventDefault();
    if(password !== password2){
      console.log('Passwords do not match');
    } else {
      console.log(formData);
      console.log('Submitted form data');
      //test request with axios before setting up redux
      const newUser = {
          username,
          email,
          password
      }

      try {
          const config = {
              headers: {
                  'Content-Type': 'application/json'
              }
          }
          
          const body = JSON.stringify(newUser);
          //send data to /api/users
          const res = await axios.post('/api/users', body, config);
          console.log(res.data);

      } catch (error) {
          console.error(error.response.data);
      }
    };
  };


  return (
    <div className="form-wrap">
      <h1 className="text-center">Sign Up</h1>
      <form className="" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Userame"
            name="username"
            value={username}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email "
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="8"
            value={password2}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Sign Up" />
      </form>
      <p className="text-center">
        Already have an account? <Link to="/login">Log in </Link>
      </p>
    </div>
  );
};

export default Register;