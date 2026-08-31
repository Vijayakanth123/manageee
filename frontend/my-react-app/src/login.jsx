import { Link } from 'react-router-dom';
import './gen.css';
export default function Login() {
  return (
    <div class="box">
        <input type="text" id="username" placeholder="username" />
        <input type="password" id="password" placeholder="password" />
        <div>
          <button class="btn" id="login_btn">login</button>
          <Link to="/signup">signup</Link>
        </div>
    </div>
  );
}
