import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

function App (){
  return (
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById("root")).
render(
  <App/>
);