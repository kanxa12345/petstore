import React from 'react';
import ServiceData from './ServiceData';
import ServiceItem from './ServiceItem';

function Service() {
    const datas = ServiceData;
    return (
        <section className='py-5' id='service'>
            <div className="container">
                <h2 className='fw-bolder text-center h-color'>Our Services</h2>
                <p className='fs-5 mb-5 text-center'>We provide a wide range of products & services for pets such as food, toys, grooming supplies, and veterinary care.
                    We aim to meet the needs of pet owners and ensure the health and happiness of their furry friends.</p>
                <div className="row">
                    {datas.map((data) => (
                        <ServiceItem key={data.id} imageUrl={data.image} title={data.title} description={data.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service;
