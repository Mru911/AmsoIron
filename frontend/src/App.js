import './App.css';
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Contact from './pages/Contact/Contact';
import Payment from './pages/Payment/Payment';
import ChatBot from './components/chatbot/ChatBot';


const Layout=()=>{
  return(
    <div className="iron1">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )

}
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>
    },
    {
    path:"/products",
      element:<Products/>
    },
    {
    path:"/product/:id",
      element:<Product/>
    },
    {
    path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
        element:<Contact/>
      },
      {
        path:"/payment",
          element:<Payment/>
        },
  ]
  },
  
])


function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
     <ChatBot/>
    </div>
  );
}

export default App;
