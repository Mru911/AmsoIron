import React from "react";
import waimg from "./../../assets/wa.png";

const Whatsapp = () => {
  return (
    <div className="">
      {/* <div className='w-[50px] h-[50px] fixed ml-10'>
       <a href="https://wa.me/919371779757"> <img src={waimg} /></a>

    </div> */}
      <div className="navbar sticky h-3">
        <div className="flex-1">
          <h2 className="btn btn-ghost ml-[37rem] bg-lime-700 ">Contact Us Now</h2>
        </div>
        <div className='w-[50px] h-[50px] sticky mr-[40rem] '>
       <a href="https://wa.me/919371779757"> <img className="mask mask-circle h-[38px]" src={waimg} alt="" /></a>

    </div>
      </div>
    </div>
  );
};

export default Whatsapp;
