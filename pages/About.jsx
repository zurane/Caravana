import React from "react";
import {BrowserRouter, Link} from "react-router-dom";

export default function About(){
  return (
    <>
      <header className="about-header">
      </header>
     <section className="main">
        <h2>
            Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p>
        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😉)
        <br/>
        <br/>
        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <br/>
         <div className="about-banner">
        <h3>
            Your destination is waiting.<br/> Your van is ready.
        </h3>
        <br/>
         <Link>Explore our vans</Link>
        </div>
        
     </section>
    
     
    </>
  )
}