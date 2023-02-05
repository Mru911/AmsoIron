import React from "react";
import { Fragment } from "react";
import Container from "@material-ui/core/Container";
import "./products.css";
import fp8 from "../../assets/13.png";
import fp9 from "../../assets/30.png";
import fp10 from "../../assets/31.png";
import fp11 from "../../assets/32.png";
import fp12 from "../../assets/23.png";
import fp13 from "../../assets/19.png";

import Logo from "./../../assets/logo1.jpeg";
// "Your new entry will create the first impression of your home.
//                 Whether homeowner builder, architect or designer, let Amso
//                 Impex' passion for beautiful products help you on your journey."

const Products = () => {
  return (
    <Container className="mt-7 mb-5">
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <h2>Our featured Products</h2>
          </div>
          <div className="productc grid grid-cols-2 items-center justify-center">
            <div className="card w-96  bg-slate-200 image-full">
              <div className="card-body bg-slate-400 rounded-xl text-slate-900">
                <h2 className="card-title">Our Moto</h2>
                <p>
                  "Your new entry will create the first impression of your home.
                  Whether homeowner builder, architect or designer, let Amso
                  Impex' passion for beautiful products help you on your
                  journey."
                </p>
              </div>
            </div>
            <div className="card w-96 bg-slate-200 image-full">
              <div className="card-body py-5 bg-slate-400 rounded-xl text-slate-900">
                <h2 className="card-title">Turn your Thoughts Into Reality</h2>
                <p>
                  Customize your thoughts and design into reality manufactured
                  by our skilled workers. We are committd to the client and
                  providing for their needs. Featured throughout big cities in
                  many historic buildings.
                </p>
              </div>
            </div>
          </div>

          <p className="text-2xl font-semibold mt-3">
            Our products are Hand-Crafted with the finest steel, exterior
            artisian paints and engineered glass
          </p>

          <div className="cproducts mt-4">
            <div className="card w-96 bg-base-100 shadow-xl image-full relative">
              <figure>
                <img className="z-2" src={fp8} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title z-10">Contemporary Iron Doors</h2>
                <div className="card-actions justify-end">
                  <a className="link link-hover rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400">
                    See More
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full relative">
              <figure>
                <img src={fp9} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Classic Iron Doors</h2>
                <div className="card-actions justify-end">
                  <a className="link link-hover rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400">
                    See More
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full relative">
              <figure>
                <img src={fp10} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Iron Gates and Fences</h2>
                <div className="card-actions justify-end">
                  <a className="link link-hover rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400">
                    See More
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full relative">
              <figure>
                <img src={fp11} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Double Iron Doors</h2>
                <div className="card-actions justify-end">
                  <a className="link link-hover rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400">
                    See More
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full relative">
              <figure>
                <img src={fp12} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Custom Iron Products</h2>
                <div className="card-actions justify-end">
                  <a className="link link-hover rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400">
                    See More
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full relative">
              <figure>
                <img src={fp13} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Single Iron Doors</h2>
                <div className="card-actions justify-end">
                  <a
                    href="/product"
                    className="ml-2 link link-hover navbar-center rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400"
                  >
                    See More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Container>
  );
};

export default Products;
