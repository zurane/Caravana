import React from "react";
import { useLocation, useParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { getVans } from "../api";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

export function loader({ params }) {
  return getVans(params.id);
}

export default function VanDetail() {
  // Always remember if your application is ever gonna have some kind of dynamic states,
  // use the useState function to update the state of your UI or application.
  // const [caravans, render] = React.useState(null);

  const location = useLocation();
  const caravans = useLoaderData();
  // const params = useParams();
  // console.log(location)

  // React.useEffect(() => {
  //   // A fetch request is a global function that uses GET method to fetch data from the server via API endpoint (Usually a URL)
  //   // The Fetch method takes the API endpoint (url) as an argument
  //   fetch(`/api/vans/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => render(data.vans));
  // }, [params.id]);

  // state? checks for the search value and assigns it to the search variable otherwise returns an empty string string.
  // Location returns the location object from the current URL
  // Because we have stored the search and type values in the state prop accessible through the useLocation hook.
  // We now use the useLocation hook to access the state props and do something with it.

  const search = location.state?.search || " ";
  const currentUrl = location.state?.search.split("=");

  return (
    <div className="caravan-overview-container">
      <div className="breadcrumb-bar">
        <Link to={`..${search}`} relative="path">
          <span className="back-btn">
            <ChevronLeftOutlinedIcon />
            {`Back to ${currentUrl[1] || "all"} vans`}
          </span>
        </Link>
      </div>
      <div className="van-overview van-detailed-page homepage__vans__wrapper">
        <img src={caravans.imageUrl} alt="caravan-image" width="100%" />
        <div className="details-container">
          <div className="van-titles">
            <h4 className="van-name">{caravans.name}</h4>
            <span className="type-badge">{caravans.type}</span>
          </div>
          <div className="van-description-container">
            <h3 className="van-description-title">Description</h3>
            <p className="van-description">{caravans.description}</p>
          </div>
          <div className="container-bottom">
            <p>Price</p>
            <span className="price">${caravans.price}</span>
            <div className="find-van-btn">
              <Link>Continue to checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
