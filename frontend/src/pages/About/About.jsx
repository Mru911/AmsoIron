import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Img4 from './../../assets/14.png'
import Img5 from './../../assets/13.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";

import Img6 from './../../assets/12.png'

import { Link } from "react-router-dom";
const Slides = [
  {
    bg: Img4,
  },
  {
    bg: Img5,
  },
  {
    bg: Img6,
  },
];
const About = () => {

  return (
    <Container className=" mt-7 mb-5">
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <h2>About Us</h2>
          </div>
          <div className="hero-content text-center">
            <div className="max-w-xl">
              <p className="font-medium text-base">
                If you value quality craftsmanship and relentless attention to
                detail,Amso Impex irpn works are the right choice. Whether
                selecting one of our beautiful styles or creating a new work of
                art ,you will find that our passion is found in professional
                service,timeliness and uncompromising quality{" "}
              </p>
            </div>
          </div>
          <div className="mission flex flex-col-2 gap-3.5 justify-center">
            <div className="card w-96 bg-base-100 shadow-xl justify-center items-center">
              <div className="card-body justify-center">
                <h2 className="card-title justify-center">Our Mission </h2>
                <p>
                  Select a standard configuration or draw your own. The
                  possibilities are only limited by your imagination. We accept
                  any type of refer- ence ideas and willing to turn them into
                  reality.
                </p>
              </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title justify-center">What we Do</h2>
                <p>
                  Custom built and Quality iron doors. We bring with us 37
                  highly skilled metal workers & iron forgers whom have a deep
                  understanding of forginf iron.
                </p>
              </div>
            </div>
          </div>
          <div className="hero-content text-center mt-5">
            <div className="max-w-xl">
              <h1 className="text-xl font-bold">Customer Service</h1>
              <p className="font-medium text-base">
                Amso Impex strives to deliver the best in the personal service.
                We are commited to client and providing for their needs.
              </p>
            </div>
          </div>
          <div className="hero-content text-center mt-5">
            <div className="max-w-xl">
              <h1 className="text-xl font-bold">Illustrative</h1>
              <p className="font-medium text-base">
                We specialize in providing products custom-fit for any remodel
                project. Our doors and windows are manufactured to match the
                specs of your existing openings for minimally invasive remodel
                and installation. As the world of your thoughts is infinite, we
                sug- gest you the pre-rendered representatives.
              </p>
            </div>
          </div>
          <div className="hero mt-1">
            <div className="hero-content text-center">
              <div className="max">
                <h1 className="text-2xl font-bold">
                  High quality projects for your satisfaction
                </h1>
                <Swiper modules={[EffectFade,Autoplay]} effect={'fade '} loop={true} 
    autoplay={{
      delay:3000,
      disableOnInteraction: false,
   
    }}
    className="heroSlider h-[500px] lg:h-[560px] bg">
      {Slides.map((slide, index) => {
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide
            className="h-full  relative flex justify-center items-center"
            key={index}
          >
            <div className="z-20 text-white text-center">
              
              
              <div className="absolute top-0 w-full h-full ">
                <img className="object-cover h-full w-full" src={bg} alt="" />
              </div>
            </div>
          
          </SwiperSlide>
        );
      })}
    </Swiper>




                
                <Link to="/products" className="btn mt-3">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Container>
  );
};

export default About;
