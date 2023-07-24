import React from 'react';

function ServiceItem(props) {
    const {imageUrl, title, description} = props;
    return (
        <div className='col-lg-4 col-md-4 col-sm-6 col-12 mb-3'>
            <div className="card rounded-4">
                <img src={`service-images/${imageUrl}`} className="card-img-top" alt={title}/>
                    <div className="card-body d-flex flex-column align-items-start">
                        <h5 className="card-title h-color">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary mx-auto my-2" style={{backgroundColor: '#17224D'}}>View More</a>
                    </div>
            </div>
        </div>
    )
}

export default ServiceItem;
