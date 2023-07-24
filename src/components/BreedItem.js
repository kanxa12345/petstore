import React from 'react';

function BreedItem(props) {
    const { imageUrl, title, gender, age } = props;
    return (
        <div className='col-lg-3 col-md-6 col-sm-6 col-12 mb-3'>
            <div className="card p-2">
                <img src={`breed-images/${imageUrl}`} className="card-img-top" alt={title} />
                <div className='my-3'>
                    <h5 className="card-title h-color">{title}</h5>
                    <div className='d-flex justify-content-between align-items-center gap-2'>
                        <span>
                            <p className="card-text">
                                Gender:<b className='ms-1'>{gender}</b>
                            </p>

                        </span>
                        <span>
                            <p className="card-text">
                                Age:<b className='ms-1'>{age}</b>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreedItem;
