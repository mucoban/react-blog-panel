import {Link} from "react-router-dom";

const Pages = () => {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Pages</h5>
                            <div className="text-end">
                                <Link to="./create" className="btn btn-success">New</Link>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6>Home Page</h6>
                                            <p><b>url:</b> <span>/</span></p>
                                            <div className="text-end">
                                                <Link to="./1" className="btn btn-primary">Edit</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Pages
