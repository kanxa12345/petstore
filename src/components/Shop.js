import React from 'react'

function Shop() {
    return (
        <section className='py-5 shop-section text-white' id='shop'>
            <div className="container d-flex flex-column align-items-start justify-content-between mt-4">
                <small>One More Friend Thousands More Fun!</small>
                <h2 className='fw-bold my-3'>"Find your furry soulmate at Our Pet Shop."</h2>
                <a href="#" className='btn btn-light rounded-5 d-flex align-items-center justify-content-between mt-4' style={{color: '#FF960C'}}>
                    Get Now <span className='d-flex justify-content-center align-items-center rounded-circle ms-3' style={{ height: '20px', width: '20px',backgroundColor: '#FF960C' }}>
                        <i className="fa fa-chevron-right text-white"></i>
                    </span>
                </a>
            </div>
        </section>
    )
}

export default Shop;
