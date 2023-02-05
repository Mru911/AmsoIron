import React from "react";
import "./featuredproducts.css";
import ImageCard from "./ImageCard";
import fp1 from "../../assets/22.png";
import fp2 from "../../assets/12.png";
import fp3 from "../../assets/15.png";
import fp4 from "../../assets/2.png";
import fp5 from "../../assets/20.png"
import fp6 from "../../assets/30.png"
import fp7 from "../../assets/27.png"



const FeaturedProducts = () => {
  return (
    <>
      <div className="fpro">
        <h1 className="text-3xl font-bold mt-6">Featured Quality Products</h1>

        <div className="">
          <div className=" ">
            <div className="">
              <p className="py-5">
                Our doors are hand-crafted in our specialized factory with over
                10 years of experience.
                <br />
                <b>Custom Build Quality Iron-Doors</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 ml-1 px-2 mt-2">

      <ImageCard className="" imgSrc={fp1}>
        <h3 className="text-xl font-bold mb-2">Single Door</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro
          tenetur temporibus assumenda tempore repudiandae nam voluptate
          reprehenderit cum beatae?
        </p>
        <div className="space-x-4 mt-4">
          <button className="btn">
            See More

          </button>

        </div>
      </ImageCard>
      <ImageCard imgSrc={fp2}>
        <h3 className="text-xl font-bold mb-2">Single Door</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro
          tenetur temporibus assumenda tempore repudiandae nam voluptate
          reprehenderit cum beatae?
        </p>
        <div className="space-x-4 mt-4">
          <button className="btn">
            See More

          </button>

        </div>
      </ImageCard>
      <ImageCard imgSrc={fp4}>
        <h3 className="text-xl font-bold mb-2">Single Door</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro
          tenetur temporibus assumenda tempore repudiandae nam voluptate
          reprehenderit cum beatae?
        </p>
        <div className="space-x-4 mt-4">
          <button className="btn">
            See More

          </button>

        </div>
      </ImageCard>
      <ImageCard imgSrc={fp3}>
        <h3 className="text-xl font-bold mb-2">Single Door</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro
          tenetur temporibus assumenda tempore repudiandae nam voluptate
          reprehenderit cum beatae?
        </p>
        <div className="space-x-4 mt-4">
          <button className="btn">
            See More

          </button>

        </div>
      </ImageCard>
      <ImageCard imgSrc={fp3}>
        <h3 className="text-xl font-bold mb-2">Single Door</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro
          tenetur temporibus assumenda tempore repudiandae nam voluptate
          reprehenderit cum beatae?
        </p>
        <div className="space-x-4 mt-4">
          <button className="btn">
            See More

          </button>

        </div>
      </ImageCard>
      <ImageCard imgSrc={fp3}>
        <h3 className="text-xl font-bold mb-2">Single Door</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro
          tenetur temporibus assumenda tempore repudiandae nam voluptate
          reprehenderit cum beatae?
        </p>
        <div className="space-x-4 mt-4">
          <button className="btn">
            See More

          </button>

        </div>
      </ImageCard> */}
      {/* </div> */}
      <div class="flex min-h-screen items-center justify-center bg-neutral-800">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400">
                See More
              </button>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400">
                See More
              </button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
            <div class="h-97 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={fp6}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Classic Iron Doors
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400">
                See More
              </button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
            <div class="h-97 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={fp7}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
              Iron Gates and Fences
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400">
                See More
              </button>
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
                Premium Products
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400">
                See More
              </button>
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
                Customized Doors
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60 bg-slate-400">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-2">
        <div className="grid grid-cols">
          <img className="w-full h-[350px] px-2 rounded-md" src={fp1} />
          <div className="my-2">
            <h2 className="font-semibold">Single Door</h2>
            <a
              href="/singledoors"
              className="bg-blue-400 text-white px-2 py-1 rounded-full text-sm my-1"
            >
              Category
            </a>
            <p className="text-sm mt-1"> Description</p>
          </div>
        </div>
        <div className="grid grid-cols">
          <img className="w-full h-[350px] px-2 rounded-md" src={fp2} />
          <div className="my-2">
            <h2 className="font-semibold">Double Door</h2>
            <button className="bg-blue-400 text-white px-2 py-1 rounded-full text-sm my-1">
              Category
            </button>
            <p className="text-sm mt-1"> Description</p>
          </div>
        </div>
        <div className="grid grid-cols">
          <img className="w-full h-[350px] px-2 rounded-md" src={fp3} />
          <div className="my-2">
            <h2 className="font-semibold">Customized Door</h2>
            <button className="bg-blue-400 text-white px-2 py-1 rounded-full text-sm my-1">
              Category
            </button>
            <p className="text-sm mt-1"> Description</p>
          </div>
        </div>
        <div className="grid grid-cols">
          <img className="w-full h-[350px] px-2 rounded-md" src={fp4} />
          <div className="my-2">
            <h2 className="font-semibold">Iron gates</h2>
            <button className="bg-blue-400 text-white px-2 py-1 rounded-full text-sm my-1">
              Category
            </button>
            <p className="text-sm mt-1"> Description</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default FeaturedProducts;
