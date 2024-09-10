import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css';
import {getDocs, collection, where, query} from 'firebase/firestore';
import {db} from './firebase';
import bcrypt from 'bcryptjs';

const Login = () => {
  const [contact, setContact] = useState({ 
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleLogin = async () => 
  {
    const { email, password} = contact;
    const dbref = collection(db, 'Auth');

try {

  const checkUser = query(dbref, where('Email', '==', email));
  const emailSnap = await getDocs(checkUser);
  const user = emailSnap.docs.map(doc => doc.data());

  if (user.length > 0 ) {

    const users = user[0];
    const checkPassword = await bcrypt.compare(password, users.Password);

    if (checkPassword) {

      navigate('/')
      
    } else {

      alert('Inavlid password. Try again!');
      
    }
    
  } else {

    alert('Inavlid Email. No account found!');
    
  }
  
} catch (error) {
  
  alert(error.message);
}


  }

  return (
    <div className="header-div">
      <label htmlFor="username" className="input-label">Your Email</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleChange} 
        value={contact.email}
      />
      
      <br></br>

      <label htmlFor="password" className="input-label">Your Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange} 
        value={contact.password}
      />
      
      <br></br>

      <button onClick={handleLogin}>Login</button>

      <br></br>
      <br></br>
      
      <div className="signup-container">
        <p>Don't have an account?</p>
        <Link to="/signup" className="signup-link">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
