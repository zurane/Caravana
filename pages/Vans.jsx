import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  // Use the global fetch request function to fetch data from server.js file.
  // Maps over the data and render it on the User Interface.
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((char) => char.type === typeFilter)
    : vans;
  const caraVans = displayedVans.map((char) => (
    <div className="cards" key={char.id}>
      <Link to={`/vans/${char.id}`}>
        <div className="cards-row">
          <div className="van-card">
            <img src={char.imageUrl} alt="caravan image" width="100%" />
            <span className="title-and-price">
              <h4>{char.name}</h4>
              <p>R{char.price}/day</p>
            </span>
            <span className="type-badge">{char.type}</span>
          </div>
        </div>
      </Link>
    </div>
  ));


  // function genNewSearchParamString(key, value){

  //   const sp = new URLSearchParams(searchParams)

  //   if (value === null){

  //     sp.delete(key)
  //   } else {

  //     sp.set(key, value)
  //   }

  //   `?${sp.toString()}`
  // }

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (key === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams
    });
  }

  return (
    <>
      <section className="page-feed-section">
        <h2>Explore our caravan options</h2>
        <div className="tabs">
          {/* Used conditional rendering of the "clear filter" button */}
          {typeFilter ? (
            <Link to=".">
              Clear search
            </Link>
          ) : null}

          {/* TBD : Use conditional rendering to give this button an active state */}
          <button onClick={() => handleFilterChange("type", "simple")}>
            Simple
          </button>
          {/* TBD : Use conditional rendering to give this button an active state */}
          <button onClick={() => handleFilterChange("type", "luxury")}>
            Luxury
          </button>
          {/* TBD : Use conditional rendering to give this button an active state */}
          <button onClick={() => handleFilterChange("type", "rugged")}>
            Rugged
          </button>
        </div>
        <div className="components">{caraVans}</div>
      </section>
    </>
  );
}
