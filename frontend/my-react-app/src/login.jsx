import { Link } from 'react-router-dom';
import { useState } from 'react';
import './gen.css';
export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  return (
    <div className="box">
      <div className="inner-box">
        <Link to="/" className="b_btn"><button id="back_btn"> {'<'} </button></Link>
        <input type="text" id="username" placeholder="username" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
        <input type="password" id="password" placeholder="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
        <div>
          <button className="btn" id="login_btn">login</button>
          <Link to="/signup">signup</Link>
        </div>
      </div>
    </div>
  );
}
