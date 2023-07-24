import React from 'react';

function Header() {
    return (
        <header className='position-fixed z-1 bg-white header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container d-flex justify-content-between gap-1">
                    <a className="logo navbar-brand fs-2 fw-bold" href="/">PETSTORE</a>
                    <button className="navbar-toggler button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-semibold" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-semibold" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-semibold" href="#service">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-semibold" href="#breed">Breeds</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-semibold" href="#shop">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-semibold" href="#blog">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className='d-flex align-items-center justify-content-between search-bar'>
                        <form className="d-flex position-relative" role="search">
                            <input className="rounded-4 form-control border-primary" type="search" placeholder="Search..." aria-label="Search" />
                            <span className='rounded-circle bg-primary d-flex justify-content-center align-items-center position-absolute custom-search'>
                                <i className='fa fa-search text-white'></i>
                            </span>
                        </form>
                        <i className='fa fa-heart custom-heart text-primary mx-3'></i>
                        <a href="#" className='btn btn-outline-primary d-flex align-items-center gap-2 justify-content-between'><i className="fa fa-shopping-cart"></i><p className='m-0 text-dark fw-semibold'>2 items</p></a>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header;
