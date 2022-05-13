import '../button-style.css';

function LogInButton() {
  return (
    <div>
      <form action={'/Identity/Account/Login'}>
        <button className="button" id="login-button">
          <p id="login-button-text">Logga In</p>
        </button>
      </form>
    </div>
  );
}

export default LogInButton;
