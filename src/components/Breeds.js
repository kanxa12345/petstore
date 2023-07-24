import React from 'react';
import BreedData from './BreedData';
import BreedItem from './BreedItem';

function Breeds() {
    const datas = BreedData;
    return (
        <section className='py-5' id='breed'>
            <div className="container d-flex flex-column align-items-center">
                <h2 className='fw-bolder h-color'>Our Pet Collections</h2>
                <p className='fs-5 mb-4'>"Bring joy to your home with a furry companion from our pet selection."</p>
                <div className="row mb-4">
                    {datas.map((data) => (
                        <BreedItem key={data.id} imageUrl={data.image} title={data.title} gender={data.gender} age={data.age} />
                    ))}
                </div>
                <a href="#" className='btn btn-primary rounded-5 d-flex align-items-center justify-content-between'>
                    View All <span className='d-flex justify-content-center align-items-center bg-white rounded-circle ms-3' style={{ height: '20px', width: '20px' }}>
                        <i className="fa fa-chevron-right text-primary"></i>
                    </span>
                </a>
            </div>
        </section>
    )
}

export default Breeds;
