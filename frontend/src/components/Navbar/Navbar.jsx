// import React from "react";
import { Link } from "react-router-dom";
import About from '../../pages/About/About';
import Products from '../../pages/Products/Products';
import Product from '../../pages/Product/Product';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import payment from '../../pages/Payment/Payment'
import logo from '../../assets/logo2.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
        {/* <img className="mask mask-squircle" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" /> */}
           <div className="logo">
          <img className=" h-[70px] w-[100px]" src={require('./../../assets/logo3.png')} />          </div>
          <a className="btn btn-ghost normal-case text-xl">AMSO IMPEX</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <Link  to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/products">
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
              </Link>
              <ul className="p-2 z-10 font-bold bg-slate-200 border-2	" >
                <li>
                  <Link to="/product">Single Doors</Link>
                </li>
                <li>
                  <Link to="/product"> Double Doors</Link>
                </li>
                <li>
                    <Link to="/product">Classic iron Door</Link>
                  </li>
                  <li>
                    <Link to="/product">Contempary iron Door</Link>
                  </li>
              </ul>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/payment" className="btn">Get a Free Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// import React, { useState, useEffect } from "react";
// import About from "../../pages/About/About";
// import Products from "../../pages/Products/Products";
// import Product from "../../pages/Product/Product";
// import Contact from "../../pages/Contact/Contact";
// import Home from "../../pages/Home/Home";
// import AmsoLogo from "./../../assets/logo1.jpeg";

// const Navbar = () => {
//   const [header, setHeader] = useState(false);
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       window.scrollY > 50 ? setHeader(true) : setHeader(false);
//     });
//   });
//   return (
//     <>
//     <header
//       className={`${
//         header ? "bg-slate-200 py-6 shadow-lg" : "bg-transparent py-8"
//       } fixed z-50 w-full transition-all duration-400`}
//     >
//       <div className="container1 mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-center lg:gap-y-0">
//         <a href="/">
//           {/* {header ? <img  className='logo' src={AmsoLogo}/> : <img src={AmsoLogo}/>} */}
//         </a>
//         <nav

//           className={`${
//             header ? "text-black" : "text-white"
//           } flex gap-x-4 lg-gap-x-8 tracking-[3px] text-[15px] items-center uppercase font-tertiary navbar-center`}
//         >

// <a className="btn btn-ghost items-center text-2xl ml-0 uppercase ">Amso Impex</a>


//           <a href="/" className="hover:text-amber-200 transition">
//             Home
//           </a>
//           <div className="dropdown">
//             <label tabIndex={0} className="btn1 m-1 bg-none cursor-pointer hover:text-amber-200 transition">
//               Products
//             </label>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu p-2 shadow  rounded-box w-52 bg-slate-400"
//             >
//               <li>
//                 <a>Single Doors</a>
//               </li>
//               <li>
//                 <a>Double Doors</a>
//               </li>
//               <li>
//                 <a>Customized Doors</a>
//               </li>

//               <li>
//                 <a>Iron Gates</a>
//               </li>
//             </ul>
//           </div>

//           <a href="/about" className="hover:text-amber-200 transition">
//             About Us
//           </a>

//           <a href="/contact" className="hover:text-amber-200 transition">
//             Contact Us
//           </a>
          
         
// <a href="/payment" class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get a Free Quote</a>


//         </nav>
        
      
//       </div>
      
//     </header>
      
//     </>
//   );
// };

// export default Navbar;
