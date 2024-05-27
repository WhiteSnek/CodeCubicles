import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HeroImage } from "../../assets";
import {Link} from 'react-router-dom'

const HeroSection = () => {

  useGSAP(() => {
      gsap.fromTo("#left-hero-text", {
        x: 100,
        scale: 0,
        opacity: 0,
      }, {
        x: -10,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: {
          amount: 1.5,
          grid: [10,1],
          axis: 'y',
          ease: 'power.inOut',
        }
      });
      gsap.fromTo("#right-hero-text", {
        y: 400,
        
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        delay: 1.5,
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.fromTo("#hero-subheading", {
        x: 200,
        scale: 0,
        opacity: 0,
      }, {
        x: 0,
        scale: 1,
        opacity: 1,
        delay: 1.5,
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.fromTo("#hero-btn",{
        scale: 0,
        opacity: 0
      },
    {
      scale: 1,
      opacity: 1,
      delay: 1.5,
      ease: 'circ.inOut'
    })
  }, []);

  return (
    <section className="w-full absolute top-0">
      <div className="h-5/6 w-full flex-col">
        <h1 className="absolute top-10 sm:top-32 m-10 sm:m-20  w-1/2  leading-tight pointer-events-none">
          <div className="flex p-0 sm:pl-10 text-3xl sm:text-9xl text-white font-bold rozha-one-regular ">{"EFFORTLESS".split("").map((letter,idx)=>(<p id="left-hero-text" >{letter}</p>))}</div>{" "}
          <p id="right-hero-text" className="text-red-500 text-3xl py-0 sm:py-20 sm:text-[10rem] kaushan-script-regular">
            Elegance
          </p>{" "}
          <p id="hero-subheading" className="text-xs sm:text-4xl ml-0 sm:ml-4 my-2 sm:my-10 text-white graduate-regular">Discover Your Next Look</p>
        </h1>
        <Link to='/login' id="hero-btn" className="absolute right-[10%] top-[80%] sm:right-[20%] hero-btn py-2 sm:py-4 px-2 sm:px-8 font-medium text-sm sm:text-2xl text-white"><svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>Get Started</Link>
        <img
          src={HeroImage}
          alt="bg-image"
          className="w-full h-full sm:h-screen pointer-events-none"
        />
      </div>
    </section>
  );
};

export default HeroSection;
