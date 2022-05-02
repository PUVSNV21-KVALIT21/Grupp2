import '../button-style.css';
import { Link } from 'react-router-dom';

function LogInButton() {
  return (
    <div>
      <Link to={'/'}>
        <button className="button" id="login-button">
          <p id="login-button-text">Logga In</p>
        </button>
      </Link>
    </div>
  );
}

export default LogInButton;
