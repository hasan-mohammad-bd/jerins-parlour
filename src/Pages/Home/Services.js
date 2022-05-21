import React from 'react';
import icon1 from '../../Image_Icon/Icon/Group 1372.png';
import icon2 from '../../Image_Icon/Icon/Group 1373.png';
import icon3 from '../../Image_Icon/Icon/Group 1374.png';
import Service from './Service';


const Services = () => {

    const services = [
        {icon: icon1, name: "Anti Age Face Treatment", price: 40, description: "This face treaement is good for yound girs. and its very cost  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias tenetur eius neque"},
        {icon: icon2, name: "Anti Age Face Treatment", price: 30, description: "This face treaement is good for yound girs. and its very cost effective Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias tenetur eius neque"},
        {icon: icon3, name: "Anti Age Face Treatment", price: 10, description: "This face treaement is good for yound girs. and its very cost effective Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias tenetur eius neque"},
    ]
    return (
        <div className='my-16'>
            <h2 className='font-semibold text-black text-3xl text-center'>Our Awesome <span className='text-pink-500 mx-auto'>Services</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
            {
                services.map(service => <Service service={service}></Service>)
            }
            </div>
            <div className='flex justify-center mt-10'>
            <button className=' mt-5 btn btn-primary text-white bg-pink-500 border-0'> Explore More</button>
            </div>
        </div>
    );
};

export default Services; 