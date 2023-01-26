import React from "react";
import { Fragment } from "react";
import Container from "@material-ui/core/Container";
import "./products.css";
import Logo from "./../../assets/logo1.jpeg";

const Products = () => {
  return (
    <Container className="mt-7 mb-5">
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <h2>Our featured Products</h2>
          </div>
          <div className="card w-[600px] mx-3 bg-base-100 shadow-xl">
  <div className="card-body justify-center mx-2">
    <p className="text-xl font-semibold justify-center">  "Your new entry will create the first impression of your home.
            Whether homeowner builder, architect or designer, let Amso Impex'
            passion for beautiful products help you on your journey."</p>
    
  </div>
</div>
          
            
            
         
          <p className="text-2xl font-semibold mt-3">
            Our products are Hand-Crafted with the finest steel, exterior
            artisian paints and engineered glass
          </p>

          <div className="cproducts mt-4">
            <div className="card w-96 bg-base-100 shadow-xl image-full relative">
              <figure>
                <img
                  className="z-2"
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title z-10">Contemporary Iron Doors</h2>
                <div className="card-actions justify-end">
                  <a className="link link-hover">See More</a>{" "}
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full relative">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Classic Iron Doors</h2>
                <div className="card-actions justify-end">
                  <a className="link link-hover">See More</a>{" "}
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full relative">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Iron Gates and Fences</h2>
                <div className="card-actions justify-end">
                  <a className="link link-hover">See More</a>{" "}
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full relative">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Double Iron Doors</h2>
                <div className="card-actions justify-end">
                  <a className="link link-hover">See More</a>{" "}
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full relative">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Custom Iron Products</h2>
                <div className="card-actions justify-end">
                  <a className="link link-hover">See More</a>{" "}
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full relative">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Single Iron Doors</h2>
                <div className="card-actions justify-end">
                  <a href="/product" className="link link-hover">
                    See More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hero min-h-screen">
            <img src={Logo} />
          </div>
        </section>
      </Fragment>
    </Container>
  );
};

export default Products;
