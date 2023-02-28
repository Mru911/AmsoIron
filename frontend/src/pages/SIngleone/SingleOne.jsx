// import { Add, Remove } from "@material-ui/icons";
// import styled from "styled-components";
// import TextField from "material-ui/TextField";

// import { mobile } from "./responsive";
// import sp1 from "./../../assets/19.png";

// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 50px;
//   display: flex;
//   ${mobile({ padding: "10px", flexDirection: "column" })}
// `;

// const ImgContainer = styled.div`
//   flex: 1;
//   height: 100%;

// `;

// const Image = styled.img`
//   width: 50%;
//   height: 80vh;
//   object-fit: cover;
//   ${mobile({ height: "40vh" })}
// `;

// const Desc = styled.p`
//   margin: 20px 0px;
// `;

// const Filter = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const FilterTitle = styled.span`
//   font-size: 20px;
//   font-weight: 200;
// `;

// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
// `;

// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
// `;

// const FilterSizeOption = styled.option``;

// const AddContainer = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
// `;

// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid teal;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px 5px;
// `;

// const Button = styled.button`
//   padding: 15px;
//   border: 2px solid teal;
//   background-color: white;
//   cursor: pointer;
//   font-weight: 500;
//   &:hover {
//     background-color: #f8f4f4;
//   }
// `;

// const SingleOne = () => {
//   return (
//     <Container className="mt-4">
//         <Wrapper>
//         <ImgContainer>
//           <Image  src={require("./../../assets/5.png")} />
//         </ImgContainer>
//         <Container className="mb-6">
//           <h1 className="text-md text-black mb-3">Enter the details</h1>
//           <Desc className="text-md text-black font-bold mb-3">
//             Amso Wrought Iron Single Door #1
//           </Desc>

//           <div className="single mt-4 mb-3">
//             <h3 className="">Enter the width:</h3>
//             <select className="select select-bordered w-full max-w-xs">
//               <option disabled selected>
//                 30 Inch Doorway
//               </option>
//               <option>30 Inch Doorway</option>
//               <option>32 Inch Doorway</option>
//               <option>34 Inch Doorway</option>
//               <option>36 Inch Doorway</option>
//               <option>40 Inch Doorway</option>
//               <option>48 Inch Doorway</option>
//               <option>56 Inch Doorway</option>
//               <option>60 Inch Doorway</option>
//             </select>
//             <h3 className="mt-3">Enter the height:</h3>
//             <select className="select select-bordered w-full max-w-xs mt-3">
//               <option disabled selected>
//                 80 Inch tall Doorway
//               </option>
//               <option> 80 Inch tall Doorway</option>
//               <option>82 Inch tall Doorway</option>
//               <option>84 Inch tall Doorway</option>
//               <option>90 Inch tall Doorway</option>
//               <option>96 Inch tall Doorway</option>
//             </select>
//             <h3 className="mt-3">Top Style:</h3>
//             <select className="select select-bordered w-full max-w-xs mt-3">
//               <option disabled selected>
//                 Square Top
//               </option>
//               <option> Square Top</option>
//               <option>7 Inch tall Eyebrow arch</option>
//               <option>11 Inch tall Eyebrow arch</option>
//               <option>Round Top</option>

//             </select>
//             <h3 className="mt-3">Push or Pull top Open:</h3>
//             <select className="select select-bordered w-full max-w-xs mt-3">
//               <option disabled selected>
//                 Pull to Open
//               </option>
//               <option> Pull to Open</option>
//               <option>Push to Open</option>

//             </select>

//           </div>
//           <button class="bg-transparent mt-4 hover:bg-blue-500 text-slate-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
//             Add To Cart
//           </button>
//         </Container>
//       </Wrapper>
//     </Container>
//   );
// };

// export default SingleOne;
import React from "react";
import "./single.css";
import sp1 from "./../../assets/5.png";

const SingleOne = () => {
  return (
    <div class="hero2">
      <div class="row2">
        <div class="col2">
          <div class="slider2">
            <div class="preview">
              <img src={sp1} id="imagebox" alt="" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="content">
            <h2>Single Door #1</h2>

            <p className="mb-[20px]">
              <h3 className="text-md font-semibold">Enter the Details:</h3>
              <h3 className=" mt-3">Enter the width:</h3>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  30 Inch Doorway
                </option>
                <option>30 Inch Doorway</option>
                <option>32 Inch Doorway</option>
                <option>34 Inch Doorway</option>
                <option>36 Inch Doorway</option>
                <option>40 Inch Doorway</option>
                <option>48 Inch Doorway</option>
                <option>56 Inch Doorway</option>
                <option>60 Inch Doorway</option>
              </select>
              <h3 className="mt-3">Enter the height:</h3>
              <select className="select select-bordered w-full max-w-xs mt-3">
                <option disabled selected>
                  80 Inch tall Doorway
                </option>
                <option> 80 Inch tall Doorway</option>{" "}
                <option>82 Inch tall Doorway</option>{" "}
                <option>84 Inch tall Doorway</option>
                <option>90 Inch tall Doorway</option>
                <option>96 Inch tall Doorway</option>
              </select>
              <h3 className="mt-3">Top Style:</h3>
              <select className="select select-bordered w-full max-w-xs mt-3">
                <option disabled selected>
                  Square Top
                </option>
                <option> Square Top</option>
                <option>7 Inch tall Eyebrow arch</option>
                <option>11 Inch tall Eyebrow arch</option>
                <option>Round Top</option>
              </select>
              <h3 className="mt-3">Push or Pull top Open:</h3>
              <select className="select select-bordered w-full max-w-xs mt-3">
                <option disabled selected>
                  Pull to Open
                </option>
                <option> Pull to Open</option>
                <option>Push to Open</option>
              </select>
            </p>

            <a class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOne;
