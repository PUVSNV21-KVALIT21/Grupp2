import './style.css';
import { Link } from 'react-router-dom';

function LogInButton() {
  return (
    <div>
      <Link to={'/'}>
        <button className="login-button">
          <p>Logga In</p>
        </button>
      </Link>
    </div>
  );
}

export default LogInButton;
