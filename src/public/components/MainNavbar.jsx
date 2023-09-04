import React from 'react'
import { Link } from 'react-router-dom'

const MainNavbar = () => {
    return <>

        <br />
        <div className="navbar navbar-expand-lg navbar-light bg-primary mx-5 rounded">
            <div className="container mx-4 ">
                <Link to="/" className="navbar-brand text-white">Home
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <a className="nav-link active dropdown-toggle   text-white" role='button' data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" href="#">Services</a>
                        <ul className="dropdown-menu">
                            <Servies />
                            {/* <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-sm-2">
                                        <div className='d-flex gap-3 '>
                                            <div>
                                                <i className="bi bi-collection text-primary fs-3 "></i>
                                            </div>
                                            <div>
                                                <h2>Heating</h2>
                                            </div>
                                        </div>
                                        <h5>AC</h5>
                                        <h6>Repair/Maintance</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Plumbing Repair</h6>
                                        <hr />
                                        <h6>Heat Pump Installation</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Frunace Installation</h6>
                                    </div>

                                    <div className="col-sm-2">
                                        <div className='d-flex gap-3 '>
                                            <div>
                                                <i className="bi bi-hypnotize text-primary fs-3 "></i>
                                            </div>
                                            <div>
                                                <h2>Colling</h2>
                                            </div>
                                        </div>
                                        <h5>AC</h5>
                                        <h6>Filter Replacements</h6>
                                        <hr />
                                        <h6 className='text-wrap'>AC Repair/Maintenance</h6>
                                        <hr />
                                        <h6 className='text-wrap'>AC Installation/Replacement</h6>
                                        <hr />
                                        <h6 className='text-wrap'>Drain Clearing</h6>
                                    </div>

                                    <div className="col-sm-2">
                                        <div className='d-flex gap-3 '>
                                            <div>
                                                <i className="bi bi-magnet text-primary fs-3 "></i>
                                            </div>
                                            <div>
                                                <h2>Plumbing</h2>
                                            </div>
                                        </div>
                                        <h5>AC</h5>
                                        <h6>Filter Replacements</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Plumbing Repair</h6>
                                        <hr />
                                        <h6>Heat Pump Installation</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Frunace Installation</h6>
                                    </div>

                                    <div className="col-sm-2">
                                        <div className='d-flex gap-3 '>
                                            <div>
                                                <i className="bi bi-credit-card-2-back text-primary fs-3 "></i>
                                            </div>

                                            <div>
                                                <h2 className='text-nowrap'>Air Qality</h2>
                                            </div>
                                        </div>
                                        <h5>AC</h5>
                                        <h6>Installation/Replacement</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Drain Clearing</h6>
                                        <hr />
                                        <h6>Central Air Installation</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Frunace Installation</h6>
                                    </div>

                                    <div className="col-sm-2">
                                        <div className='d-flex gap-3 '>
                                            <div>
                                                <i className="bi bi-paperclip text-primary fs-3 "></i>
                                            </div>
                                            <div>
                                                <h2>Electical</h2>
                                            </div>
                                        </div>
                                        <br />
                                        <h6>Lighting</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Surge Protection</h6>
                                        <hr />
                                        <h6>Generators</h6>
                                        <hr />
                                        <h6 className='text-nowrap'>Heat Pump Installation</h6>
                                    </div>
                                    <br />

                                </div>
                            </div> */}
                        </ul>


                        <a className="nav-link active dropdown-toggle  text-white" role='button' data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" href="#">Sale</a>
                        <ul className="dropdown-menu mx-5">
                            <Shop />
                            {/* <li><a className="dropdown-item" href="#">  Shop with Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">My account</a></li>
                            <li><a className="dropdown-item" href="#">Cart</a></li>
                            <li><a className="dropdown-item" href="#">Single Product Page</a></li> */}
                        </ul>

                        <a className="nav-link active dropdown-toggle  text-white" role='button' data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" href="#">About</a>
                        <ul className="dropdown-menu mx-5">
                            <AboutUs />
                            {/* <li><a className="dropdown-item" href="#"> Schedule an Appointment</a></li>
                            <li><a className="dropdown-item" href="#">Get an Estimate</a></li>
                            <li><a className="dropdown-item" href="#">Contact Us</a></li> */}
                        </ul>

                        <a className="nav-link active dropdown-toggle  text-white" role='button' data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" href="#">Contact</a>
                        <ul className="dropdown-menu mx-5">
                            <ContactUs />
                            {/* <li><a className="dropdown-item" href="#">Shop with Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">My account</a></li>
                            <li><a className="dropdown-item" href="#">Checkout</a></li>
                            <li><a className="dropdown-item" href="#">Single Product Page</a></li> */}
                        </ul>
                    </ul>
                    <form className="d-flex " role="search">
                        <button type="button" className="btn btn-warning position-relative">
                            <i className="bi bi-cart3"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                10
                            </span>
                        </button>
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button> */}
                    </form>
                </div>
            </div>
        </div>


    </>
}

export default MainNavbar




// const Servies = () => {
//     return <>
//         <div className="container">
//             <div className="row justify-content-between">
//                 <div className="col-sm-2">
//                     <div className='d-flex gap-3 '>
//                         <div>
//                             <i className="bi bi-collection text-primary fs-3 "></i>
//                         </div>
//                         <div>
//                             <h2>Heating</h2>
//                         </div>
//                     </div>
//                     <h5>AC</h5>
//                     <h6>Repair/Maintance</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Plumbing Repair</h6>
//                     <hr />
//                     <h6>Heat Pump Installation</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Frunace Installation</h6>
//                 </div>

//                 <div className="col-sm-2">
//                     <div className='d-flex gap-3 '>
//                         <div>
//                             <i className="bi bi-hypnotize text-primary fs-3 "></i>
//                         </div>
//                         <div>
//                             <h2>Colling</h2>
//                         </div>
//                     </div>
//                     <h5>AC</h5>
//                     <h6>Filter Replacements</h6>
//                     <hr />
//                     <h6 className='text-wrap'>AC Repair/Maintenance</h6>
//                     <hr />
//                     <h6 className='text-wrap'>AC Installation/Replacement</h6>
//                     <hr />
//                     <h6 className='text-wrap'>Drain Clearing</h6>
//                 </div>

//                 <div className="col-sm-2">
//                     <div className='d-flex gap-3 '>
//                         <div>
//                             <i className="bi bi-magnet text-primary fs-3 "></i>
//                         </div>
//                         <div>
//                             <h2>Plumbing</h2>
//                         </div>
//                     </div>
//                     <h5>AC</h5>
//                     <h6>Filter Replacements</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Plumbing Repair</h6>
//                     <hr />
//                     <h6>Heat Pump Installation</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Frunace Installation</h6>
//                 </div>

//                 <div className="col-sm-2">
//                     <div className='d-flex gap-3 '>
//                         <div>
//                             <i className="bi bi-credit-card-2-back text-primary fs-3 "></i>
//                         </div>

//                         <div>
//                             <h2 className='text-nowrap'>Air Qality</h2>
//                         </div>
//                     </div>
//                     <h5>AC</h5>
//                     <h6>Installation/Replacement</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Drain Clearing</h6>
//                     <hr />
//                     <h6>Central Air Installation</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Frunace Installation</h6>
//                 </div>

//                 <div className="col-sm-2">
//                     <div className='d-flex gap-3 '>
//                         <div>
//                             <i className="bi bi-paperclip text-primary fs-3 "></i>
//                         </div>
//                         <div>
//                             <h2>Electical</h2>
//                         </div>
//                     </div>
//                     <br />
//                     <h6>Lighting</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Surge Protection</h6>
//                     <hr />
//                     <h6>Generators</h6>
//                     <hr />
//                     <h6 className='text-nowrap'>Heat Pump Installation</h6>
//                 </div>
//                 <br />

//             </div>
//         </div>
//     </>
// }

const Servies = () => {
    return <>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-sm-6 col-md-6 col-lg-1 ">
                    <div className='d-flex gap-3 align-items-center '>
                        <div>
                            <i className="bi bi-collection text-primary fs-3 "></i>
                        </div>
                        <div>
                            <h4 className='mt-1'>Heating</h4>
                        </div>
                    </div>
                    <br />
                    <Link to="/heating" className='text-decoration-none'>
                        <p className='text-decoration-none dropdown-item fw-medium'>Repair/Maintance</p>
                    </Link>


                    {/* <hr /> */}
                    <Link to="/plumbing" className='text-decoration-none'>

                        <h6 className='text-nowrap dropdown-item fw-medium mt-4'>Plumbing Repair</h6>
                    </Link>
                    {/* <hr /> */}

                    <h6 className='text-nowrap dropdown-item fw-medium mt-4' >Heat Pump Installation</h6>
                    {/* <hr /> */}
                    <br />
                    <h6 className='text-nowrap dropdown-item fw-medium'>Frunace Installation</h6>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-1">
                    <div className='d-flex gap-3 align-items-center '>
                        <div>
                            <i className="bi bi-hypnotize text-primary fs-3 "></i>
                        </div>
                        <div>
                            <h4 className='mt-1'>Colling</h4>
                        </div>
                    </div>

                    <br />
                    <p className='dropdown-item fw-medium mt-1 '>Filter Replacement</p>
                    {/* <hr /> */}
                    <p className='text-wrap dropdown-item mt-3 fw-medium '>AC Repair/Maintenance</p>
                    {/* <hr /> */}
                    <p className='text-wrap dropdown-item mt-3 fw-medium '>AC Installation/Replacement</p>
                    {/* <hr /> */}
                    <p className='dropdown-item mt-3 fw-medium '>Drain Clearing</p>


                </div>

                <div className="col-sm-6 col-md-6 col-lg-1">
                    <div className='d-flex gap-3 align-content-center '>
                        <div>
                            <i className="bi bi-magnet text-primary fs-4 "></i>
                        </div>
                        <div>
                            <h4 className='mt-1'>Plumbing</h4>
                        </div>
                    </div>
                    <br />
                    <p className='dropdown-item mt-1 fw-medium' >Filter Replacements</p>
                    {/* <hr /> */}
                    <p className='dropdown-item mt-3 fw-medium text-nowrap'>Plumbing Repair</p>
                    {/* <hr /> */}
                    <p className='dropdown-item mt-3 fw-medium text-nowrap '>Heat Pump Installation</p>
                    {/* <hr /> */}
                    <h6 className='dropdown-item mt-3 fw-medium text-nowrap'>Frunace Installation</h6>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-1 ">
                    <div className='d-flex gap-3 align-items-center   '>
                        <div>
                            <i className="bi bi-credit-card-2-back text-primary fs-3 "></i>
                        </div>

                        <div>
                            <h4 className='text-nowrap mt-1'>Air Qality</h4>
                        </div>
                    </div>
                    <br />
                    <p className='dropdown-item fw-medium' >Installation/Replacement</p>
                    <p className=' dropdown-item mt-3 fw-medium text-nowrap'>Drain Clearing</p>
                    <p className='dropdown-item mt-3 fw-medium'>Central Air Installation</p>
                    <p className='dropdown-item mt-3 fw-medium text-nowrap'>Frunace Installation</p>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-1">
                    <div className='d-flex gap-2 align-items-center'>
                        <div>
                            <i className="bi bi-paperclip text-primary fs-3 "></i>
                        </div>
                        <div>
                            <h4 className='mt-1'>Electical</h4>
                        </div>
                    </div>
                    <p className='dropdown-item mt-4 fw-medium'>Lighting</p>
                    <p className=' dropdown-item mt-3 fw-medium text-nowrap'>Surge Protection</p>
                    <p className='dropdown-item mt-3 fw-medium'>Generators</p>
                    <p className=' dropdown-item mt-3 fw-medium text-nowrap'>Heat Pump Installation</p>
                </div>
                <br />

            </div>
        </div>
    </>
}


const Shop = () => {
    return <>
        <li><a className="dropdown-item" href="#">  Shop with Sidebar</a></li>
        <li><a className="dropdown-item" href="#">My account</a></li>
        <li><a className="dropdown-item" href="#">Cart</a></li>
        <li><a className="dropdown-item" href="#">Single Product Page</a></li>
    </>
}


const AboutUs = () => {
    return <>
        <li><a className="dropdown-item" href="#"> About Us</a></li>
        <li><a className="dropdown-item" href="#">Our Team</a></li>
        <li><a className="dropdown-item" href="#">Servies Overview</a></li>
        <li><a className='dropdown-item'>Testimonials</a></li>
        <li><a className='dropdown-item' href="#">Careers</a></li>
        <li><a className='dropdown-item' href="#">Maintenance Program</a></li>
        <li><a className='dropdown-item' href="#">Special and Coupons</a></li>
    </>
}

const ContactUs = () => {
    return <>
        <li><a className="dropdown-item" href="#">Schedule an Appointment</a></li>
        <li><a className="dropdown-item" href="#">Get an Estimate</a></li>
        <li><a className='dropdown-item' href="#"></a></li>
    </>
}

