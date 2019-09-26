import React from 'react';

class Login extends React.Component{
    render() {
        return (
            <div>
                <form action="/">
                    <p><input type="text" value="Login"/></p>
                    <p><input type="password" value="Password"/></p>
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;