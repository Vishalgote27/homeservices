import React from 'react'
import "./../../admin/pages/style.css"

const AdminHome = () => {
    return <>




        {/* <!-- Sale & Revenue Start --> */}
        <div className="container-fluid pt-4 px-4 mb-5">
            <h1>Dashboard</h1>
            <br />
            <div className="row g-4">

                <div className="col-sm-4 col-xl-3 ">
                    <div className="text-white rounded d-flex bg-primary align-items-center justify-content-between p-4">
                        <h4>

                            <i className="bi bi-people fa-3x"></i>
                        </h4>
                        <div className="ms-3 ">
                            <p className="mb-2 fw-bold fs-5"> Total users </p>
                            <h6 className="mb-0 fs-3">134</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-xl-3 ">
                    <div className="text-white rounded d-flex align-items-center justify-content-between p-4 w1">
                        <h4>

                            <i className="bi bi-bicycle fa-3x "></i>
                        </h4>
                        <div className="ms-3 ">
                            <p className="mb-2 fw-bold fs-5">Total Partners </p>
                            <h6 className="mb-0 fs-3">279</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-xl-3 ">
                    <div className="text-white rounded d-flex bg-success align-items-center justify-content-between p-4">
                        <h4>

                            <i className="bi bi-bar-chart fa-3x "></i>
                        </h4>
                        <div className="ms-3 ">
                            <p className="mb-2 fw-bold fs-5">Total Services </p>
                            <h6 className="mb-0 fs-3">124</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-xl-3">
                    <div className="text-white rounded d-flex bg-danger align-items-center justify-content-between p-4">
                        <h4>

                            <i className="bi bi-bookmark-star-fill fa-3x "></i>
                        </h4>
                        <div className="ms-3 ">
                            <p className="mb-2 fw-bold fs-5 text-nowrap">Complete Service</p>
                            <h6 className="mb-0 fs-3">190</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-xl-3 ">
                    <div className="text-white rounded d-flex bg-info align-items-center justify-content-between p-4">
                        <h4>

                            <i className="bi bi-skip-end-btn fa-3x "></i>
                        </h4>
                        <div className="ms-3 ">
                            <p className="mb-2 fw-bold fs-5 text-nowrap">Pending Services</p>
                            <h6 className="mb-0 fs-3">964</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-xl-3 ">
                    <div className="text-white rounded d-flex bg-secondary   align-items-center justify-content-between p-4">
                        <h4>

                            <i className="bi bi-x-lg fa-3x "></i>
                        </h4>
                        <div className="ms-3 fw-bold ">
                            <p className="mb-2  fs-5 text-nowra">Cancel Service</p>
                            <h6 className="mb-0 fs-3">874</h6>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        {/* <!-- Sale & Revenue End --> */}









    </>
}

export default AdminHome