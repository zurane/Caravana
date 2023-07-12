import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export default function Home(){
  return (
    <>
    <header>
      <h1>
        You got the plans, we got the travel caravans
      </h1>
          <p>
              Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
          </p>
              <div className="find-van-btn">
                  <Link>Find your van</Link>
              </div>
    </header>
    </>
  );
} 