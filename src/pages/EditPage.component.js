import {Link} from "react-router-dom";

const EditPage = () => {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <Link to="./../" className="btn btn-primary btn-sm mb-4">Back</Link>
                            <h5 className="card-title mb-4">Edit Page</h5>
                            <div className="row">
                                <div className="col-6">
                                    <form>
                                        <div className="form-group mb-2">
                                            <label>Page Title</label>
                                            <input type="text" className="form-control" value="Home Page" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label>Url</label>
                                            <input type="text" className="form-control" value="/" />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-12">
                                    <div className="">
                                        <h5>Sections</h5>
                                        <div className="card mb-2 add-section">
                                            <h6>Add Section</h6>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6 className="card-title">Section A</h6>
                                                        <div className="card"><div className="card-body">
                                                            <h6>Title</h6>
                                                            <input type="text" className="form-control" value="Welcome to home page" />
                                                        </div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 pt-4 text-end">
                                    <button className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default EditPage
