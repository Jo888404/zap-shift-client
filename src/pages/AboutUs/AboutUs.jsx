import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => {
    return (
        <div className='bg-white rounded mt-8 px-25 py-8 mb-16'>
            <section className=''>
                <h1 className='font-extrabold text-[56px] text-[#03373D]'>About Us</h1>
                <p className='text-[#606060]' >
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.
                </p>
            </section>
            <section className='text-[#606060] mt-12 space-y-6'>
                <div className=' inline-flex  gap-4  text-xl'>
                    <Link className='hover:text-[#5B6A2E] hover:font-extrabold' to="/story">Story</Link> 
                    <Link className='hover:text-[#5B6A2E] hover:font-extrabold' to="/story">Mission</Link> 
                    <Link className='hover:text-[#5B6A2E] hover:font-extrabold' to="/story">Success</Link> 
                    <Link className='hover:text-[#5B6A2E] hover:font-extrabold' to="/story">Team & Others</Link> 
                    
                    
                    
                   
                </div>
                <div className='space-y-4'>
                    <p>
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                    <p>
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                    <p>
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;