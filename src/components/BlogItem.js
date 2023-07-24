import React from 'react';

function BlogItem(props) {
    const { title, description, imageUrl } = props;
    return (
        <div className='col-lg-4 col-md-4 col-sm-6 col-12 mb-4'>
            <div className="card border-0">
                <img src={`blog-images/${imageUrl}`} className="card-img-top" alt={title} />
                <div className="card-body px-0">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor: '#17224D'}}>View Details</a>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;
