import React from 'react';
import { services } from '../../constants';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Service = ({ service }) => {
    // Define styles for border and text color
    const borderColorStyle = {
        borderBottomColor: service.color
    };
    const textColorStyle = {
        color: service.color
    };

    return (
        <div className="p-8 shadow-lg opacity-50 bg-white rounded-lg border-b-8" id='service' style={borderColorStyle}>
            <h1 className="text-center font-bold text-2xl carter-one-regular" style={textColorStyle}>
                {service.name}
            </h1>
            <p className='text-center p-4'>{service.description}</p>
        </div>
    );
};

const OurServices = () => {
  useGSAP(()=>{
      gsap.fromTo("#service",{
        opacity:0,
        x:-100
      },{
        x:0,
        opacity: 1,
        stagger: {
            amount: 1.5,
            grid: [4,1],
            axis: 'y',
            ease: 'power2.inOut',
          }
    })
  },[])
    return (
        <div className='pt-10 bg-sky-100'>
            <h1 className='text-black text-7xl text-center font-bold mb-10 rozha-one-regular'>Our Services</h1>
            <div className='grid grid-cols-1 p-8 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {services.map((service, idx) => (
                    <Service key={idx} service={service} />
                ))}
            </div>
        </div>
    );
};

export default OurServices;
