import React from "react";
import con1 from "./../../assets/Contact.jpg";
import './contactcon.css'

const ContactCon = () => {
  return (
    <div>
      {/* <div
        className="hero ml-9 mb-4 h-[300px] w-[90rem] items-center rounded-xl mt-5"
        style={{
          backgroundImage: { con1 },
        }}
      >
        <div className="hero-overlay bg-opacity-60t"></div>
        <div className="hero-content text-center text-neutral-content mt-3">
          <div className="max-w-md ">
            <h1 className="mb-6 text-lg font-bold text-black ">
              Its our pleasure to deliver the exact product you have imagined...
            </h1>
            <p className="mb-8 text-3xl font-bold text-black">
              Contact Us For Your Specific Requirement
            </p>
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div> */}
      {/* <div className="card ml-9 mb-[3rem] w-[90rem] h-[300px] bg-base-200 shadow-2xl mt-[3rem] ">
        <div className="object-fill absolute top-0 w-full h-full z-10  ">
          <img className="object-cover h-full w-full" src={con1} />
        </div>
        <div className=" z-20 card-body bg-slate-400">
          <h2 className="card-title text-center justify-center font-md text-md text-black mb-6">
            Its our pleasure to deliver the exact product you have imagined...
          </h2>
          <p className="py-6 px-2 font-medium text-3xl text-black">
            Contact Us For Your Specific Requirement
          </p>
          <div className="">
            <a href="/products" className="btn btn-primary ">
              Contact Us
            </a>
          </div>
        </div> 
       </div> */}
       <div className="hero-image rounded-xl">
        <div className="hero-text">
          <h2 className="text-center justify-center font-md text-md text-white mb-6">Its our pleasure to deliver the exact product you have imagined...</h2>
          <p className="py-6 px-2 font-medium text-3xl text-white">Contact Us For Your Specific Requirement</p>
          <a href="/contact" className="btn btn-primary ">
              Contact Us
            </a>
        </div>
       </div>
    </div>
  );
};

export default ContactCon;
