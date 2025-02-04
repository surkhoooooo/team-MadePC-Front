import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import MainPage from "./pages/MainPage/MainPage";
import About from "./pages/AboutPage/AboutPage";
import { Navigate, Route, Routes } from "react-router-dom";
import PCForGame from "./components/PCForGame/PCForGame";
import LowPriceComps from "./pages/LowPrieceComps/LowPriceComps";
import AboutUs from "./components/AboutUs/AboutUs";
import Faq from "./components/Faq/Faq";
import Comments from "./components/Comments/Comments";
import ConfiguratorPage from "./pages/ConfiguratorPage/ConfiguratorPage";
import ArrayDrop from "./components/ArrayDrop/ArrayDrop";
import Nav from "./components/Nav/Nav";
import Basket from "./pages/Basket/Basket";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state)=> state.application.token)
 if(token){
  return (
    
    <>

      <div className="main_route">
        <Routes>
          <Route path="/" element={<Header/>}>
         
        <Route path="/basket" element={<Basket/>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/configurator" element={<ConfiguratorPage />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="/game" element={<PCForGame />} />
        <Route path="/lowprice" element={<LowPriceComps />} />
        <Route path="/dr" element={<ArrayDrop/>} />
          </Route>
          <Route path = "/signin" element = {<Navigate to="/"/>}/>
        </Routes>
      </div>
      <Footer />
      
      
    </>
    
  );
 }

 return (
    
  <>
    <div className="main_route">
        <Routes>
          <Route path="/" element={<Header/>}>
         
        <Route path="/basket" element={<Basket/>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/configurator" element={<ConfiguratorPage />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="/game" element={<PCForGame />} />
        <Route path="/lowprice" element={<LowPriceComps />} />
        <Route path="/dr" element={<ArrayDrop/>} />
          </Route>
          <Route path = "/signin" element = {<SignIn/>}/>
        </Routes>
      </div>
      <Footer />
      
    
    
  </>
  
);
};

export default App;
