import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../api";

export function loader() {
  return getVans();
}

export default function Vans() {
 
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const [error, setErr] = React.useState(false);
  const vans = useLoaderData();
  console.log(vans);
  console.log(searchParams.toString());

  // Use the global fetch request function to fetch data from server.js file.
  // Maps over the data and render it on the User Interface.
  // React.useEffect(() => {
  //   async function loadVanData() {
  //     load(true);
  //     try {
  //       const vansData = await getVans();
  //       setVans(vansData);
  //     } catch (error) {
  //       setErr(error);
  //     } finally {
  //       load(false);
  //     }
  //   }
  //   loadVanData();
  // }, []);

  const displayedVans = typeFilter
    ? vans.filter((char) => char.type === typeFilter)
    : vans;
  const caraVans = displayedVans.map((char) => (
    <div className="cards" key={char.id}>
      {/* The state prop will take any value passed to it and store it, so it can be accessible */}
      {/* for example below we want to store the searchParams value in a string format */}
      {/* Anytime you pass data along via the state property, that data will be available on the location's state property */}
      {/* if you need to pass data from Link through to the new component (in our case to the vansDetail component /Route) that's being rendered, pass Links a state prop with the data you want to pass through. */}
      <Link
        to={`${char.id}`}
        state={{ search: `?${searchParams.toString()}`}}
      >
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

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (key === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (error) {
    return <h3>{error.message}</h3>
  }

  return (
    <>
      <section className="page-feed-section">
        <h2>Explore our caravan options</h2>
        <div className="tabs">
          {/* Used conditional rendering of the "clear filter" button */}
          {typeFilter ? <Link to=".">Clear search</Link> : null}

          {/* TBD : Use conditional rendering to give this button an active state */}
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`${typeFilter === "simple" ? "selected" : " "}`}
          >
            Simple
          </button>
          {/* Used conditional rendering to give this button an active state */}
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`${typeFilter === "luxury" ? "selected" : " "}`}
          >
            Luxury
          </button>
          {/* TBD : Use conditional rendering to give this button an active state */}
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`${typeFilter === "rugged" ? "selected" : " "}`}
          >
            Rugged
          </button>
        </div>
        <div className="components">{caraVans}</div>
      </section>



    </>
  );
}
