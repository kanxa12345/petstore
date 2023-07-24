import React from 'react'

function Footer() {
    return (
        <footer className='footer text-white py-4'>
            <div className="container">
                <div className="row border-bottom py-4">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                        <h2>PETSTORE</h2>
                        <div className='my-4'>
                            <p className='mb-1 footer-custom-color'>Phone Number:</p>
                            <b>+977-9861859764</b>
                        </div>
                        <div>
                            <p className='mb-1 footer-custom-color'>Location:</p>
                            <b>Tahachal-Kathmandu</b>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                        <p className='footer-custom-color'>"City Pet House & Animal Clinic: Quality and affordable animal care at your doorstep. Comprehensive, professional, and compassionate veterinary services by our dedicated and experienced team."</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                        <div className='ms-5 footer-list'>
                            <h5>Menu</h5>
                            <ul className='navbar-nav'>
                                <li><a href="#" className='text-decoration-none footer-custom-color'>Home</a></li>
                                <li><a href="#" className='text-decoration-none footer-custom-color'>About</a></li>
                                <li><a href="#" className='text-decoration-none footer-custom-color'>Services</a></li>
                                <li><a href="#" className='text-decoration-none footer-custom-color'>Breeds</a></li>
                                <li><a href="#" className='text-decoration-none footer-custom-color'>Shop</a></li>
                                <li><a href="#" className='text-decoration-none footer-custom-color'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                        <h5>Gallery</h5>
                        <div className='d-flex gap-1 flex-wrap'>
                            <img className='img-fluid' src="footer-images/img1.png" alt="img1" />
                            <img className='img-fluid' src="footer-images/img2.png" alt="img2" />
                            <img className='img-fluid' src="footer-images/img3.png" alt="img3" />
                            <img className='img-fluid' src="footer-images/img4.png" alt="img4" />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-4 gap-1 bot-footer'>
                    <p className='footer-custom-color'>Copyright &copy; 2023 City Pet House & Animal Clinic | All Rights Reserved</p>
                    <div className="social-media d-flex justify-content-between align-items-center gap-2">
                        <a href="#" className='bg-white py-1 px-2 rounded'><i className="fa fa-facebook"></i></a>
                        <a href="#" className='bg-white py-1 px-2 rounded'><i className="fa fa-twitter"></i></a>
                        <a href="#" className='bg-white py-1 px-2 rounded'><i className="fa fa-instagram"></i></a>
                        <a href="#" className='bg-white py-1 px-2 rounded'><i className="fa fa-linkedin"></i></a>
                        <a href="#" className='bg-white py-1 px-2 rounded'><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
