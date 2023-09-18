import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function VanDetail() {
  // Always remember if your application is ever gonna have some kind of dynamic states,
  // use the useState function to update the state of your UI or application.
  const [caravans, render] = React.useState(null);
  const params = useParams();
  React.useEffect(() => {
    // A fetch request is a global function that uses GET method to fetch data from the server via API endpoint (Usually a URL)
    // The Fetch method takes the API endpoint (url) as an argument
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => render(data.vans));
  }, [params.id]);

  return (
    <div className="caravan-overview-container">
      {caravans ? (
        <div className="van-overview">
          <img src={caravans.imageUrl} alt="caravan-image" width="100%" />
          <span className="type-badge">{caravans.type}</span>
          <h4>{caravans.name}</h4>
          <span className="price">R{caravans.price}/day</span>
          <p>{caravans.description}</p>
          <div className="find-van-btn">
            <Link>Rent this van</Link>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
