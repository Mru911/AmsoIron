import React from "react";
import { Link } from "react-router-dom";
import About from '../../pages/About/About';
import Products from '../../pages/Products/Products';
import Product from '../../pages/Product/Product';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import './navbar.css'


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link  to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/products" className="justify-between">
                Products
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 z-10 font-bold  bg-slate-200 border-2">
                  <li>
                    <Link to="/product">Single Door</Link>
                  </li>
                  <li>
                    <Link to="/product" >Double Door</Link>
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
          {/* <div className="logo"> */}
          {/* <img className="mask mask-circle h-[350px] w-[300px]" src={require('./../../assets/logo1.jpeg')} />          </div> */}
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
// import React,{useState,useEffect} from 'react'
// import About from '../../pages/About/About';
// import Products from '../../pages/Products/Products';
// import Product from '../../pages/Product/Product';
// import Contact from '../../pages/Contact/Contact';
// import Home from '../../pages/Home/Home';
// import AmsoLogo from './../../assets/logo1.jpeg'

// const Navbar = () => {
//   const [header,setHeader]=useState(false);
//   useEffect(()=>{
//     window.addEventListener('scroll',()=>{
//       window.scrollY > 50 ?  setHeader(true) : setHeader(false);
//     })
//   })
//   return (
//     <header className={`${header ? 'bg-slate-200 py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-400`}>
//       <div className="container1 mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-center lg:gap-y-0">
//         <a href="/">
//           {/* {header ? <img  className='logo' src={AmsoLogo}/> : <img src={AmsoLogo}/>} */}

//         </a>
//         <nav className={`${header ? 'text-black' : 'text-white'} flex gap-x-4 lg-gap-x-8 tracking-[3px] text-[15px] items-center uppercase font-tertiary`}>
//           <a href="/" className='hover:text-amber-200 transition'>Home</a>
//           <a href="/products" className='hover:text-amber-200 transition'>Products
//           <li tabIndex={0}>
//                  <svg
//                   className="fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
//                 </svg>
             
//               <ul className="p-2 z-10 font-bold bg-slate-200 border-2	" >
//                 <li>
//                   <Link to="/product">Single Doors</Link>
//                 </li>
//                 <li>
//                   <Link to="/product"> Double Doors</Link>
//                 </li>
//                 <li>
//                     <Link to="/product">Classic iron Door</Link>
//                   </li>
//                   <li>
//                     <Link to="/product">Contempary iron Door</Link>
//                   </li>
//               </ul>
//             </li>
//           </a>

//           <a href="/about" className='hover:text-amber-200 transition'>About Us</a>

//           <a href="/contact" className='hover:text-amber-200 transition'>Contact Us</a>

//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Navbar
