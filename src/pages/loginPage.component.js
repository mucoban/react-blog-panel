const LoginPage = () => {
    return (<div className="login-page">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body text-start">
                            <form className="text-middle">
                                <div className="form-group mb-3">
                                    <label>Username:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Password:</label>
                                    <input type="password" className="form-control" />
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

export default LoginPage
