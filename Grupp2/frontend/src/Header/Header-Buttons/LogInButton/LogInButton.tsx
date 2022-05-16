import '../button-style.css';
import { useEffect, useRef, useState } from 'react';

function LogInButton() {
    const [user, setUser]: any | undefined = useState([{}]);
    const userInfoText: any = useRef();
    const manageAccountText: any = useRef();

    useEffect(() => {
        getUser();

        if (user.length > 0) {
            userInfoText.current.style.display = 'block';
        }
    }, []);

    async function getUser() {
        const response = await fetch('/user', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const userResponse = await response.json();
        setUser(userResponse);
    }

    return (
        <div>
            <form action={'/Identity/Account/Manage'}>
                <button className="button" id="login-button">
                    <p ref={manageAccountText} id="login-button-text">
                        {user.length > 0 ? 'Hantera Konto' : 'Logga In'}
                    </p>
                    <p ref={userInfoText} id="loggedin-text">
                        {user.length > 0 ? 'Välkommen ' + user[0]?.firstName + user[0]?.lastName : ' '}
                    </p>
                </button>
            </form>
        </div>
    );
}

export default LogInButton;