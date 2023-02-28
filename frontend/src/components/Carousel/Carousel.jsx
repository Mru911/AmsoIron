// // import React, { useState } from "react";
// // import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
// // import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
// // import "./carousel.css";

// // const Carousel = () => {
// //     const [currentSlide, setCurrentSlide] = useState(0);
// //     const data = [
// //     " https://images.pexels.com/photos/7475548/pexels-photo-7475548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //     "https://images.pexels.com/photos/7166927/pexels-photo-7166927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //      "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

// //       ];

// //   const prevSlide = () => {
// //     setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
// //   };
// //   const nextSlide = () => {
// //     setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
// //   };
// //   return (
// //     <div className="slider">
// //       {/* <div className="ctitle">
// //           Handcrafted Iron Doors
// //         </div> */}
// //       <div className="scontainer" style={{transform:`translateX(-${currentSlide * 100}vw)`}} >

// //         <img src={data[0]} alt="" />
// //         <img src={data[1]} alt="" />
// //         <img src={data[2]} alt="" />
// //       </div>
// //       <div className="slidericons">
// //         <div className="slidericon" onClick={prevSlide} >
// //           <WestOutlinedIcon />
// //         </div>
// //         <div className="slidericon"onClick={nextSlide}>
// //           <EastOutlinedIcon />
// //         </div>
// //       </div>
// //     </div>
// //   )
// // };

// // export default Carousel;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";
import Img1 from "../../assets/Imgc1.jpg";
import Img2 from "../../assets/slider2.jpg";

import Img3 from "../../assets/Imgc2.jpeg";

const Slides = [
  {
    title: "Handcrafted Iron Doors",
    bg: Img1,
    btnText: "Find your Classic iron door",
  },
  {
    title: "Quality Craftsmenship and Relentless attention",
    bg: Img2,
    btnText: "Double Doors",
  },
  {
    title: "Easily Customizable",
    bg: Img3,
    btnText: "Find your Contemporary Iron Door",
  },
];
const Carousel = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade "}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[400px] lg:h-[660px] bg"
    >
      {Slides.map((slide, index) => {
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide
            className="h-full bg-pink-400 relative flex justify-center items-center"
            key={index}
          >
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary tracking-[5px]  mb-5">
                Your Thoughts into Reality
              </div>
              <h1 className="text-[32px] z-20  uppercase tracking-[2px] max-w-[920px] lg:text-[68px] font-serif leading-tight mb-6">
              {title}
            </h1>
            <a className="btn btn-lg btn-primary mx-auto h-[2rem]" href="/products">{btnText}</a>
            </div>
            
            <div className="absolute top-0 w-full h-full ">
              <img className="object-cover h-full w-full" src={bg} alt="" />
            </div>

            <div className="absolute h-full w-full bg-black/40"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
