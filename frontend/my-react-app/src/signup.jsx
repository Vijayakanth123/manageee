import { Link } from 'react-router-dom';
import './gen.css';

export default function Signup() {
  return (
    <div class="box">
        <input type="text" id="username" placeholder="username" />
        <input type="password" id="password" placeholder="password" />
        <div>
          <button class="btn" id="signup_btn">signup</button>
          <Link to="/login">login</Link>
        </div>
    </div>
  );
}
