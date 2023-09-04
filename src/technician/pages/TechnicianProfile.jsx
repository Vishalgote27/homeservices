import React from 'react'

const TechnicianProfile = () => {
    return <>
        <br />
        <br />
        <div className="container">
            <div className="row">
                {/* col-sm-9 col-md-5 col-lg-5 mx-auto */}
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Profile</div>

                        <div className="card-body">
                            <div>
                                <div className="lc-block text-center">
                                    {/* <img alt="" className="rounded-circle mb-1" src="https://images.unsplash.com/photo-1574698550747-3f839e813107?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=772&amp;q=80" style={{ height: "14vh" }} /> */}
                                    <img alt="" className="rounded-circle mb-1" src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" style={{ height: "15vh", width: "15vh" }} />
                                </div>
                                <label htmlFor="name" className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter Your name"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Email"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="password" className="form-label">Mobile</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="mobile"
                                    placeholder="Enter Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <button type="button" className="btn btn-primary w-100 mt-3">
                                Update
                            </button>
                            <br />
                            <br />
                            <button type="button" className="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Change Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mt-2">
                            <label htmlFor="cpassword" className="form-label">Current Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="cpassword"
                                placeholder="Enter Your Password"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div className="mt-2">
                            <label htmlFor="npassword" className="form-label">New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="npassword"
                                placeholder="Enter Your Password"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>











    </>
}

export default TechnicianProfile