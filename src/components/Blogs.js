import React from 'react';
import BlogData from './BlogData';
import BlogItem from './BlogItem';

function Blogs() {
    const datas = BlogData;
    return (
        <section className='py-5' id='blog'>
            <div className="container d-flex flex-column align-items-center">
                <h2 className='mb-4 fw-bolder h-color'>Our Blogs</h2>
                <div className="row">
                    {datas.map((data) => (
                        <BlogItem key={data.id} imageUrl={data.image} title={data.title} description={data.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs;
