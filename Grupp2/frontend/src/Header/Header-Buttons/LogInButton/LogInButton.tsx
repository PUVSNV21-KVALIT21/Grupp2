import '../button-style.css';
import { useEffect, useRef, useState } from 'react';

function LogInButton() {
  const [user, setUser]: any | undefined = useState([{}]);
  const userInfoText: any = useRef();
  const manageAccountText: any = useRef();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const response = await fetch('/user', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const userResponse = await response.json();
    if (userResponse) {
      setUser(userResponse);
    }
    if (user[0].email !== '') {
      userInfoText.current.style.display = 'block';
    }
  }

  return (
    <div>
      <form action={'/Identity/Account/Manage'}>
        <button className="button" id="login-button">
          <p ref={manageAccountText} id="login-button-text">
            {user[0].email ? 'Hantera Konto' : 'Logga In'}
          </p>
          <p ref={userInfoText} id="loggedin-text">
            {'Välkommen ' + user[0].firstName + ' ' + user[0].lastName}
          </p>
        </button>
      </form>
    </div>
  );
}

export default LogInButton;
