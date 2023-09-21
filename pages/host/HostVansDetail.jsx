import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

export default function HostVansDetail() {
    const [caravan, render] = React.useState(null);
    const { id } = useParams();
    React.useEffect(() => {
        // A promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
        // is a proxy for a value not necessarily known when the promise is created.
        // It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
        // This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value,
        // the asynchronous method returns a promise to supply the value at some point in the future.
        fetch(`/api/host/vans/${id}`)
            .then((res) => res.json())
            .then((data) => render(data.vans));
    }, []);

    if (!caravan) {
        return <h3>Loading...</h3>;
    } else
        return (
            <>
                <div className="caravan-overview-container">
                    <Link to="../vans" end>
                        <span>&larr;Back to all vans</span>
                    </Link>
                    <div className="van-card">
                        <div className="van" key={caravan.id}>
                            <img src={caravan.imageUrl} alt={`Photo of ${caravan.name}`} />
                        </div>
                        <div className="van-details host-van-detail">
                            <span className="type-badge">{caravan.type}</span>
                            <h3>{caravan.name}</h3>
                            <span>R{caravan.price}/day</span>
                        </div>
                    </div>
                    <Tabs />
                    <Outlet context={{ caravan }} />
                </div>
            </>
        );
}
























function Tabs() {
    return (
        <div className="dashboard__tabs">
            <ul>
                <li>
                    <NavLink to="." end={true}>Description</NavLink>
                </li>
                <li>
                    <NavLink to="pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink to="photos">Photos</NavLink>
                </li>
            </ul>
        </div>
    );
}
