import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Payment from "./pages/Payment/Payment";
import ChatBot from "./components/chatbot/ChatBot";
import Whatsapp from "./components/whatsapp/Whatsapp";
import Faq from "./pages/Faq/Faq";
import DoubleDoors from "./pages/DoubleDoor/DoubleDoors";
import Classic from "./pages/Classic/Classic";
import SingleProducts from "./pages/SingleProducts/SingleProducts";
import DoubleProducts from "./pages/DoubleProducts/DoubleProducts";
import SingleOne from "./pages/SIngleone/SingleOne";
import SingleTwo from "./pages/SingleTwo/SingleTwo";
import SingleThree from "./pages/SingleThree/SingleThree";
import DoubleTwo from "./pages/DoubleTwo/DoubleTwo";

const Layout = () => {
  return (
    <div className="iron1">
      {/* <Whatsapp /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      
      
      {
        path: "/classic",
        element: <Classic />,
      },
      {
        path: "/singleproducts",
        element: <SingleProducts />,
      },
      {
        path: "/doubleproducts",
        element: <DoubleProducts />,
      },
      {
        path: "/singletwo",
        element: <SingleTwo />,
      },
      {
        path: "/singleone",
        element: <SingleOne />,
      },
      {
        path: "/singlethree",
        element: <SingleThree />,
      },
      {
        path: "/doubletwo",
        element: <DoubleTwo />,
      },
      {
        path: "/doubledoors",
        element: <DoubleDoors/>,
      },
      
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ChatBot />
      {/* <Faq/> */}
    </div>
  );
}

export default App;
