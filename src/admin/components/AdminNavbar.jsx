import React from 'react'
import { Link } from "react-router-dom"

const AdminNavbar = () => {
    return <>

        <nav className="navbar navbar-expand-lg bg-info ">
            <div className="container-fluid">
                {/* data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" */}
                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" className="navbar-toggler" type="button" ria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-5" id="navbarTogglerDemo01">
                    <a className="navbar-brand  fw-meduim " href="#">Admin</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            {/* <a className="nav-link active " aria-current="page" href="#">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="bi bi-justify fs-2"></i></a>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btn-success" type="submit"><i className="bi bi-person-gear"></i></button>
                    </form>
                </div>
            </div>
        </nav>



        <div className="offcanvas offcanvas-start w-auto" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

            <div className="sidebar pe-4 pb-3 offcanvas-body" >
                <nav className="navbar bg-light navbar-light">

                    {/* <a className="navbar-brand mx-4 mb-3">
                        <h3 className="text-primary"><i className="fa fa-bars me-2" data-bs-dismiss="offcanvas"></i>DASHMIN</h3>
                    </a> */}
                    {/* <div className=" align-items-center ms-4 mb-4 "> */}

                    <div className="ms-4 mb-4 d-flex justify-content-between align-items-center w-100">
                        <div>
                            <h6 className="mb-0">Jhon Doe</h6>
                            <span>Admin</span>
                        </div>


                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>


                    </div>

                    <div className="navbar-nav w-100">
                        <Link to="/admin" className='text-decoration-none'>
                            <p className="nav-item nav-link active"><i
                                className="fa fa-tachometer-alt me-2"></i>Dashboard</p>
                        </Link>

                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i
                                className="fa fa-laptop me-2"></i>admin</a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <Link to="/admin/users" className='text-decoration-none '>
                                    <p className='dropdown-item'>User</p>
                                </Link>
                            </div>
                        </div>

                        {/* <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</a> */}
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i
                                className="far fa-file-alt me-2"></i>Services</a>
                            <div className="dropdown-menu bg-transparent border-0 ">
                                <Link to="/admin/serviestypes" className='text-decoration-none' >

                                    <p className="dropdown-item fw-bold ">Service Type</p>
                                </Link>
                                <p className="dropdown-item fw-bold">Services Categoery</p>

                            </div>
                        </div>
                    </div>
                </nav>
                {/* </div> */}
            </div>
        </div>
    </>
}

export default AdminNavbar


