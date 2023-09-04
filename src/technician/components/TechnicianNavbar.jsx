import React from 'react'
import { Link } from 'react-router-dom'

const TechnicianNavbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Teachnician</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/technician" className='text-decoration-none nav-link active nav-item'>Dashboard

                        </Link>
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                        </li> */}



                    </ul>
                    <form className="d-flex" role="search">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Your Account</button>

                            <ul className="dropdown-menu">
                                <Link to="/technician/technicianaccount" className='text-decoration-none dropdown-item'> Profile

                                </Link>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>


                    </form>
                </div>
            </div>
        </nav>

    </>
}

export default TechnicianNavbar