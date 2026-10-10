import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './gen.css';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/acc/login', formData,{withCredentials: true});
      console.log('Login successful:', response.data);
      // Add redirection or success notification here
      navigate('/');

    }catch (error) {
      if (error.response && error.response.status === 403) {
        // User is already logged in, bounce them to the dashboard
        console.log("User already logged in,try logging out first");
        navigate('/');
      }else{
        console.error('Login failed:', error.response?.data || error.message);
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
          <button className="btn" onClick={handleLogin} id="login_btn">login</button>
          <Link to="/signup">signup</Link>
        </div>
      </div>
    </div>
  );
}
