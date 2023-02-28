
import React from "react";
import "./doubletwo.css";
import sp1 from "./../../assets/21.png";

const DoubleTwo = () => {
  return (
    <div class="hero3">
      <div class="row3">
        <div class="col3">
          <div class="slider3">
            <div class="preview1">
              <img src={require('./../../assets/6.png')} id="imagebox" alt="" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="content">
            <h2>Double Door #2</h2>

            <p className="mb-[20px]">
              <h3 className="text-md font-semibold">Enter the Details:</h3>
              <h3 className=" mt-3">Enter the width:</h3>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  30 Inch Doorway
                </option>
                <option>30 Inch Doorway</option>
                <option>32 Inch Doorway</option>
                <option>34 Inch Doorway</option>
                <option>36 Inch Doorway</option>
                <option>40 Inch Doorway</option>
                <option>48 Inch Doorway</option>
                <option>56 Inch Doorway</option>
                <option>60 Inch Doorway</option>
              </select>
              <h3 className="mt-3">Enter the height:</h3>
              <select className="select select-bordered w-full max-w-xs mt-3">
                <option disabled selected>
                  80 Inch tall Doorway
                </option>
                <option> 80 Inch tall Doorway</option>{" "}
                <option>82 Inch tall Doorway</option>{" "}
                <option>84 Inch tall Doorway</option>
                <option>90 Inch tall Doorway</option>
                <option>96 Inch tall Doorway</option>
              </select>
              <h3 className="mt-3">Top Style:</h3>
              <select className="select select-bordered w-full max-w-xs mt-3">
                <option disabled selected>
                  Square Top
                </option>
                <option> Square Top</option>
                <option>7 Inch tall Eyebrow arch</option>
                <option>11 Inch tall Eyebrow arch</option>
                <option>Round Top</option>
              </select>
              <h3 className="mt-3">Push or Pull top Open:</h3>
              <select className="select select-bordered w-full max-w-xs mt-3">
                <option disabled selected>
                  Pull to Open
                </option>
                <option> Pull to Open</option>
                <option>Push to Open</option>
              </select>
            </p>

            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleTwo;
