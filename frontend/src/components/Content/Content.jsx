import React from "react";

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="hero mt-3">
          <div className="hero-content">
            <div className="max-w-md mt-3">
              <h1 className="text-5xl font-bold">Why Iron Doors?</h1>
              <p className="px-6 py-10 text-2.5xl font-medium">
                Since the 1850s, doors and windows have been made from
                hot-rooled steel. Featured throughout big cities in many
                historic buildings,steel doors and windows have become
                incredibly popular in contemporary architecture. Steel doors and
                windows offer superior or benefits over traditional aluminium or
                wood
              </p>
              <div class="flex justify-center">
                <ul class="bg-white rounded-lg w-96 text-gray-900">
                  <li class="px-6 py-2 border-b border-gray-800 w-full rounded-t-lg font-bold ">
                    Easily Customizable
                  </li>
                  <li class="px-6 py-2 border-b border-gray-800 w-full font-bold">
                    Superior Strength of inclement weather
                  </li>
                  <li class="px-6 py-2 border-b border-gray-800 w-full font-bold">
                    3x stronger than aluminium and 16x stronger than wood
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hero mt-2  ">
          <div className="hero-content text-center">
            <div className="">
              <h1 className="text-5xl font-bold">Premium Customer Service</h1>
              <p className="py-6 font-medium text-lg">
                Our representatives are in constant communication with each one
                of our clients to make sure their wrought iron project meets all
                of their needs.
              </p>
              <div className="card w-196 h-[350px] bg-base-700 shadow-xl image-full">
                <figure>
                <img src={require('./pr1.png')}/>
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-center justify-center font-bold text-xl text-gray-50">
                    Quality Products
                  </h2>
                  <p className="py-6 px-2 font-medium text-lg text-gray-50">
                    We design and manufacture the finest handcrafted iron entry
                    doors & estate gates. <br /> We are successful in providing
                    our customers with personal detailed service & beautiful
                    quality products{" "}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary ">Have a tour </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero top-1 ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Finely Handcrafted</h1>
              <p className="py-8">
                {" "}
                We focus on extremely fine crafted metal works and the way to
                meet your desired form to make it suit perfectly for your house
                or any time of architecture.The skills of worker and their compation towards artistic form is considered on priority We promise you to fulfill your expectations.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="hero top-1 ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Your Thoughts Into Reality</h1>
              <p className="py-8">
                Select a Standard configuration or draw your own.The possibilities are only limited by your imagination. We accept any type of reference ideas and <b> willing to turn them into reality.</b>


              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
