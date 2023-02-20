import React from "react";
import { Fragment } from "react";
import Container from "@material-ui/core/Container";
import "./products.css";
import Lottie from "lottie-react";

import fp8 from "../../assets/13.png";
import fp9 from "../../assets/30.png";
import fp10 from "../../assets/31.png";
import fp11 from "../../assets/32.png";
import fp12 from "../../assets/23.png";
import fp13 from "../../assets/19.png";
import doorAnimate from "./../../assets/animation/134213-door.json";


import Logo from "./../../assets/logo1.jpeg";
               

const Products = () => {
  return (
    <Container className="mt-7 mb-5">
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <h2>Our featured Products</h2>
          </div>
          <div className="mission flex flex-col-2 gap-3.5 justify-center">
            <div className="card w-96 bg-base-100 shadow-xl justify-center items-center">
              <div className="card-body justify-center">
                <h2 className="card-title justify-center">Our Moto</h2>
                <p>
                  "Your new entry will create the first impression of your home.
                  Whether homeowner builder, architect or designer, let Amso
                  Impex' passion for beautiful products help you on your
                  journey."
                </p>
              </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title justify-center">
                  Turn your Thoughts Into Reality
                </h2>
                <p>
                  Customize your thoughts and design into reality manufactured
                  by our skilled workers. We are committd to the client and
                  providing for their needs. Featured throughout big cities in
                  many historic buildings.
                </p>
              </div>
            </div>
          </div>

          <p className="text-2xl font-semibold mt-6">
            Our products are Hand-Crafted with the finest steel, exterior
            artisian paints and engineered glass
          </p>
          <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-6 ml-[8rem] navbar-center">
            <a
              href="/doubledoors"
              class="flex flex-col items-center h-[25rem] w-[30rem] bg-slate-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-500  dark:hover:bg-gray-500"
            >
              <img
                className="object-cover w-full ml-2 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={fp8}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Double Doors
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-800 text-xl">
                  Click To Check the various categories suitable for your House
                </p>
                
              </div>
            </a>
            <a
              href="/singledoors"
              class="flex flex-col items-center h-[25rem] w-[30rem] bg-slate-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-500  dark:hover:bg-gray-500"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={fp9}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Single Doors
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-800 text-xl">
                Click To Check the various categories suitable for your House

                </p>
                
              </div>
            </a>
            <a
              href="/classic"
              class="flex flex-col items-center h-[25rem] w-[30rem] bg-slate-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-500  dark:hover:bg-gray-500"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={fp10}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Classic Iron Doors
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-800 text-xl">
                Click To Check the various categories suitable for your House

                </p>
                
              </div>
            </a>
            <a
              href="#"
              class="flex flex-col items-center h-[25rem] w-[30rem] bg-slate-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-500  dark:hover:bg-gray-500"
            >
              <img
                className="object-cover ml-2 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={fp13}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Contemporary Iron Doors
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-800 text-xl">
                Click To Check the various categories suitable for your House

                </p>
                
              </div>
            </a>
          </div>
        </section>
      </Fragment>
      <Lottie className="h-[50rem]" animationData={doorAnimate} loop={true} />

    </Container>
  );
};

export default Products;
