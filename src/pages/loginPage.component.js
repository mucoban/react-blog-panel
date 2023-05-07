import React from 'react';
import axios from 'axios';
import { globals } from '../globals';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        const username = e.target.elements.username.value
        const password = e.target.elements.password.value

        if (!username) { alert('username is empty'); return }
        if (!password) { alert('password is empty'); return }

        axios.post(`${globals.apiUrl}login`, { username: username, password: password })
            .then((result) => {
                if (result.data.status !== 'success') { alert(result.data.message) }
                else { this.props.login() }
            })
            .catch(error => alert(error.message))
    }

    render() {
        return (<div className="login-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body text-start">
                                <form className="text-middle" onSubmit={this.onSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Username:</label>
                                        <input type="text" className="form-control" name="username" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password:</label>
                                        <input type="password" className="form-control" name="password" />
                                    </div>
                                    <div className="form-group text-end">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

}

export default LoginPage
