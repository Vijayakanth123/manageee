import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './gen.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/acc/signup', formData ,{withCredentials: true});
      console.log('Signup successful:', response.data);
      // Add redirection or success notification here
      navigate('/login');

    } catch (error) {
      if(error.response && error.response.status === 403) {
        // User is already logged in, bounce them to the dashboard
        console.log("User already logged in,try logging out first");
        navigate('/');
      }else{
        console.error('Signup failed:', error.response?.data || error.message);
      }
    }
  };



  return (
    <div className="box">
      <div className="inner-box">
        <Link to="/" className="b_btn"><button id="back_btn"> {'<'} </button></Link>
        <input type="text" className="inputbar" id="username" placeholder="username" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
        <input type="password" className="inputbar" id="password" placeholder="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
        <div>
          <button className="btn" id="signup_btn" onClick={handleSignup}>signup</button>
          <Link to="/login">login</Link>
        </div>
      </div>
    </div>
  );
}
