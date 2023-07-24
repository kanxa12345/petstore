import React from 'react'

function Homepage() {
    return (
        <section className='home-section py-5 position-relative'>
            <div className="container d-flex flex-column align-items-center mb-5 pb-5">
                <h1 className='fw-bolder h-color'>We provide the best care to our furry friends!</h1>
                <p className='fw-semibold fs-5 mb-5 pb-5'>Top Quality of Pet Product Store.</p>
            </div>
            <div className='py-5'></div>
            <span className='left rounded-circle position-absolute bg-white d-flex justify-content-center align-items-center'>
                <i className="fa fa-chevron-left text-primary"></i>
            </span>
            <span className='right rounded-circle position-absolute bg-white d-flex justify-content-center align-items-center'>
                <i className="fa fa-chevron-right text-primary"></i>
            </span>
        </section>
    )
}

export default Homepage;
