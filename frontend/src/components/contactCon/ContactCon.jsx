import React from "react";
import con1 from "./../../assets/conten.jpg";

const ContactCon = () => {
  return (
    <div>
      <div
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
      </div>
      {/* <div className="card ml-9 mb-4 w-196 h-[350px] bg-base-200 shadow-2xl ">
        <figure className="object-fill  ">
          <img className="h-[1000px] w-[700px]" src={con1} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center justify-center font-md text-md text-gray-50 mb-6">
            Its our pleasure to deliver the exact product you have imagined...
          </h2>
          <p className="py-6 px-2 font-medium text-3xl text-gray-100">
            Contact Us For Your Specific Requirement
          </p>
          <div className="">
            <a href="/products" className="btn btn-primary ">
              Contact Us
            </a>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default ContactCon;
