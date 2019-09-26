import React from 'react';

class Login extends React.Component{
    render() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Login"></input>
                <input className="form-control mr-sm-2" type="password" placeholder="Password"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Log In</button>
            </form>
        )
    }
}

export default Login;