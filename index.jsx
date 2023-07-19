import React from "react";
import ReactDOM from "react-dom/client";
// The Router package or module is a standalone and does not come with the React
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
// import Footer from "./pages/Footer";
import Vans from "./pages/Vans";
import Detail from "./pages/VanDetail";
import Layout from "./components/layout";

import "./server";

function App() {
  return (
    // Routes help navigate to different sections and pages/components of your application without having to make any requests to the server.
    // The entire navigation system is handled by routes internally intercepting server requests, therefore, making your application faster
    // And a more delightful user experience.
    // With Routes you can build Single Page Applications ( Such as dashboards, chat applications and learning platforms etc)
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="vans/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
