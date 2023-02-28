import React from "react";
import Container from "@material-ui/core/Container";

import fp1 from "../../assets/30.png";
import fp2 from "../../assets/6.png";
import fp3 from "../../assets/19.png";
import fp4 from "../../assets/20.png";
import fp5 from "../../assets/29.png";
import fp6 from "../../assets/30.png";
import fp7 from "../../assets/27.png";

const Products = () => {
  return (
    <Container className="mb-5">
      <div className="fpro">
        <section className="contact">
          <div className="contact-heading">
            <h2>Our Quality Products</h2>
          </div>
        </section>
      </div>

      <div class="flex min-h-screen items-center justify-center bg-neutral-800">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
            <div class="h-97 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={fp1}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Single Doors
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Description about single doors
              </p>
              <a
                href="/singleproducts"
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400"
              >
                See More
              </a>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
            <div class="h-97 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={fp3}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Double Doors
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Description about Double doors
              </p>
              <a
                href="/doubleproducts"
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400"
              >
                See More
              </a>
            </div>
          </div>

          <div class="group relative cursor-pointer items-center rounded-xl justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-97 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={fp5}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Customized Doors
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Description about Customized doors
              </p>
              <a
                href="/products"
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400"
              >
                See More
              </a>
            </div>
          </div>
          <div class="group relative cursor-pointer rounded xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-97 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={fp4}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Wine Cellar Doors
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Description about Wine Cellar doors
              </p>
              <a
                href="/products"
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400"
              >
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
