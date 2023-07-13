import React from "react";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVans(data.vans);
      });
  }, []);

  const caraVans = vans.map((van) => (
    <div className="cards" key={van.id}>
      <div className="cards-row">
        <div className="van-card">
          <img src={van.imageUrl} alt="caravan image" width="100" />
          <h3>{van.title}</h3>
          <p>{van.price}</p>
          <span>{van.type}</span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h1>Explore our caravan options</h1>
      <div className="tabs">
        <span>Simple</span>
        <span>Luxury</span>
        <span>Rugged</span>
        {caraVans}
      </div>
    </>
  );
}
