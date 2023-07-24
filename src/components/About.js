import React from 'react'

function About() {
    return (
        <section className='py-5' id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
                        <img className='img-fluid' src="images/about-image.png" alt="image" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-start justify-content-center">
                        <h2 className='fw-bolder fs-2 h-color'>About Us</h2>
                        <p className='fs-5'>Pet House & Animal clinic was established with
                            moto to provide qualitative and affordable animal healthcare service to your doorstep.</p>
                        <ul className='navbar-nav my-4'>
                            <li className='fw-semibold'><i className="fa fa-check-circle-o text-primary me-3"></i>Comprehensive</li>
                            <li className='fw-semibold my-2'><i className="fa fa-check-circle-o text-primary me-3"></i>Professional</li>
                            <li className='fw-semibold'><i className="fa fa-check-circle-o text-primary me-3"></i>Compassionate veterinary service.</li>
                        </ul>
                        <a href="#" className='btn btn-primary rounded-5 d-flex align-items-center justify-content-between'>
                            Contact <span className='d-flex justify-content-center align-items-center bg-white rounded-circle ms-3' style={{height: '20px', width: '20px'}}>
                                <i className="fa fa-chevron-right text-primary"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
