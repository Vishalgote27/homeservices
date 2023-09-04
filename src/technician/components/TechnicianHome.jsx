import React from 'react'

const TechnicianHome = () => {
    const firstBox = "rgb(65,138,238)"
    const secondBox = "rgb(11,158,111)"
    const thirdBox = "rgb(246,115,53)"
    const fourBox = "rgb(249,66,97)"
    return <>

        <div className="container">
            <div className="row ">
                <div className="col-sm-7 text-center text-lg-start text-md-start">
                    <div className="">
                        <div editable="rich ">
                            <br />
                            <br />
                            <br />
                            <h2 className=''><strong>Your Today Report</strong></h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus. Cras ornare faucibus laoreet. Aenean vel nisi in ipsum congue.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 col-md-5 align-self-center text-center">
                    <div className="">
                        <img className="img-fluid" width={"400px"} height={"300px"} src="https://img.freepik.com/free-vector/handymen-repairing-clients-home-appliance-cartoon-illustration_74855-14396.jpg?w=900&t=st=1693642129~exp=1693642729~hmac=96a751dba2dd505f423f14afd4bd7ba79e2026e9d25ea5550d6c2a693823e177" alt="" />
                        {/* <a className="btn btn-link btn-lg" href="#" role="button">Call to action</a> */}
                    </div>
                </div>
            </div>
        </div>



        <div className="container">

            <div className="row mt-2 ">
                <div className="col-sm-6 col-md-3 col-6">
                    <div className="card w-100 rounded-0 text-white" style={{ backgroundColor: firstBox }}>
                        <div className="card-body text-center">
                            <h4 className="fw-bold">125</h4>
                            <h5>Orders</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                    <div className="card w-100 rounded-0 text-white" style={{ backgroundColor: secondBox }}>
                        <div className="card-body text-center">
                            <h4 className="fw-bold">125</h4>
                            <h5>Complete</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6 mt-3 mt-md-0">
                    <div className="card w-100 rounded-0 text-white" style={{ backgroundColor: thirdBox }}>
                        <div className="card-body text-center">
                            <h4 className="fw-bold">125</h4>
                            <h5>Pending</h5>
                        </div>
                    </div>
                </div>
                {/* style={{ backgroundColor: "rgb(255,105,130)" }} */}
                <div className="col-sm-6 col-md-3 col-6 mt-3 mt-md-0 ">
                    <div className="card w-100 rounded-0  text-white" style={{ backgroundColor: fourBox }} >
                        <div className="card-body text-center">
                            <h4 className="fw-bold">125</h4>
                            <h5>Cancel</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>



        {/* <div className="container-fluid bg-dark g-0">
            <div className="row g-0 align-items-center">
                <div className="col-lg-6 d-flex justify-content-center">
                    <div className="col-12 col-lg-8 p-4 text-white">
                        <div className="lc-block">
                            <div editable="rich">
                                <h2 className="fw-bolder">Working Hours</h2>
                            </div>
                        </div>
                        <div className="lc-block">
                            <div editable="rich">
                                <p>Monday to Friday: 07:00 – 19:45
                                    Saturday to Sunday: 11:00 – 17:00</p>
                            </div>
                        </div>

                        <div className="lc-block">
                            <div editable="rich">
                                <h2 className="fw-bolder">Address</h2>
                            </div>
                        </div>
                        <div className="lc-block">
                            <div editable="rich">
                                <p>Street 3043 Clarence Court -&nbsp;Fayetteville&nbsp;NC <br />North Carolina 28306</p>
                            </div>
                        </div>

                        <div className="lc-block">
                            <div editable="rich">
                                <h2 className="fw-bolder">Phone Numbers</h2>
                            </div>
                        </div>

                        <div className="lc-block">
                            <div editable="rich">
                                <p>Number 910-249-5283 <br /> Mobile Number 910-492-4232</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="lc-block">
                        <div className="ratio ratio-16x9" lc-helper="gmap-embed">
                            <iframe src="https://maps.google.com/maps?q=aurangabad%2C%20UK&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

    </>
}

export default TechnicianHome