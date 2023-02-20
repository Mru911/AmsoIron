// import React ,{Fragment} from 'react'
// import Container from "@material-ui/core/Container";

// const SingleDoors = () => {
//   return (
//     <div>
//       <section className="contact">
//           <div className="contact-heading">
//             <h2>Single Door</h2>
//           </div>
//           </section>
//     </div>
//   )
// }

// export default SingleDoors
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import TextField from "material-ui/TextField";

import { mobile } from "./responsive";
import sp1 from "./../../assets/19.png";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;

`;

const Image = styled.img`
  width: 90%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;


const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const DoubleDoors = () => {
  return (
    <Container className="mt-4">
      <Wrapper>
        <ImgContainer>
          <Image  src={sp1} />
        </ImgContainer>
        <Container>
          <h1 className="text-md text-black">Enter the details</h1>
          <Desc className="text-lg text-black">
            Amso Wrought Iron Wine Cellar Double Door Gate - Many sizes to
            choose from
          </Desc>
          <Price>₹20000</Price>
          <div className="single mt-4">
            <h3>Enter the width:</h3>
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
              <option> 80 Inch tall Doorway</option>
              <option>82 Inch tall Doorway</option>
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
           
          </div>
          <button class="bg-transparent mt-4 hover:bg-blue-500 text-slate-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Add To Cart
          </button>
        </Container>
      </Wrapper>
    </Container>
  );
};

export default DoubleDoors;
