import { Link } from 'react-router-dom';
import './gen.css';

export default function Signup() {
  return (
    <div class="box">
      <div class="inner-box">
        <Link to="/" class="b_btn"><button id="back_btn"> {'<'} </button></Link>
        <input type="text" id="username" placeholder="username" />
        <input type="password" id="password" placeholder="password" />
        <div>
          <button class="btn" id="signup_btn">signup</button>
          <Link to="/login">login</Link>
        </div>
      </div>
    </div>
  );
}
