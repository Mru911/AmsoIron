import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100   z-10 ">
        <div className="logo">
          <img
            className=" w-[9rem] h-[9rem]"
            src={require("./../../assets/k.png")}
          />{" "}
        </div>
        <div className="flex-none ml-6">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <a href="/">Home</a>
            </li>
            <li tabIndex={0}>
              <a href="/products">
                Products
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 z-30 bg-slate-300">
                <li>
                  <a className="text-black" href="/singleproducts">Single Doors</a>
                </li>
                <li>
                  <a className="text-black" href="/doubleproducts">Double Doors</a>
                </li>
                <li>
                  <a className="text-black">Contemporary Doors Doors</a>
                </li>
                <li>
                  <a className="text-black">Wine Cellar Doors</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/faq">FAQ's</a>
            </li>
          </ul>
        </div>
      <div className="navbar-end">
          <Link
            to="/payment"
            className="paymentBtn"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
