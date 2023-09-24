import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function VanDetail() {
  // Always remember if your application is ever gonna have some kind of dynamic states,
  // use the useState function to update the state of your UI or application.
  const [caravans, render] = React.useState(null);
  const location = useLocation();
  console.log(location)
  const params = useParams();
  React.useEffect(() => {
    // A fetch request is a global function that uses GET method to fetch data from the server via API endpoint (Usually a URL)
    // The Fetch method takes the API endpoint (url) as an argument
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => render(data.vans));
  }, [params.id]);
  // state? checks for the search value and assigns it to the search variable otherwise returns an empty string string.
  // Location returns the location object from the current URL
  // Because we have stored the search and type values in the state prop accessible through the useLocation hook.
  // We now use the useLocation hook to access the state props and do something with it.
  const search = location.state?.search || " "
  const currentUrl = location.state?.search.split("=");
  return (
    <div className="caravan-overview-container">
      <Link to={`..${search}`} relative="path">
        <span>&larr;{`Back to ${currentUrl[1] || "all"} vans`}</span>
      </Link>
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
