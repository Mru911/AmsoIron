import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Img4 from "./../../assets/30.png";
import Img5 from "./../../assets/13.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";
import doorAnimation from "./../../assets/animation/94725-door-open.json";
import Lottie from "lottie-react";

import Img6 from "./../../assets/14.png";

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
              <p className="font-medium  text-xl ">
                Established in 2020 Amso Impex is a Iron Works manufacturing company which provides hand-crafted doors and gates 
                with tema of 37 highly skilled metal workers and iron forgers.
              </p>
            </div>
          </div>
          <div className="mission flex flex-col-2 gap-3.5 justify-center mt-3">
            <div className="card w-96 bg-slate-400 adow-xl justify-center items-center  ">
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
            <div class="card w-96 bg-slate-400 shadow-xl text-md">
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
                <div class="card w-98 mt-5  shadow-xl ml-[4rem] bg-slate-300">
                  <div class="card-body text-xl  font-semibold na navbar-center ">
                    {" "}
                    <p>
                      If you value quality craftsmanship and relentless
                      attention to detail, Amso Impex iron works are the right
                      choice. Whether selecting one of our beautiful styles or
                      creating a new work of art. you will find that our passion
                      is found in professional service, timeliness and
                      uncompromising quality.
                    </p>
                  </div>
                </div>

                <Lottie
                  className="h-[30rem]"
                  animationData={doorAnimation}
                  loop={true}
                />

                {/* <div className="projects ">
                  <div className="carousel w-[30rem] h-[30rem]">
                    <div id="slide1" className="carousel-item relative w-full">
                      <img
                        src={Img6}
                        className="w-full"
                      />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                          ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                      <img
                        src={Img4}
                        className="w-full"
                      />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                          ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                      <img
                        src={Img5}
                        className="w-full"
                      />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                          ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                    
                  </div>
                </div> */}

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
