import React from "react";
import { ReactDOM } from "react";

export default function () {
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1>Explore our caravan options</h1>
      <div className="tabs">
        <span>Simple</span>
        <span>Luxury</span>
        <span>Rugged</span>
      </div>
      <section className="cards">
        <div className="cards-row">
          <div className="card"></div>
        </div>
      </section>
    </>
  );
}
