import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getVansData } from  "../../api";


export function loader() {
    return getVansData();
}

export default function HostVans() {
    // const [vans, feed] = React.useState([]);
    const vans = useLoaderData();

    // React.useEffect(() => {
    //     fetch("/api/host/vans")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             feed(data.vans);
    //         });
    // }, []);

    const vansList = vans.map((van) => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="vans-list-container"
        >
            <div className="van-card">
                <div key={van.id}>
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                </div>
                <div className="van-details">
                    <span className="type-badge">{van.type}</span>
                    <h3>{van.name}</h3>
                    <span>{van.price}/day</span>
                </div>
            </div>
        </Link>
    ));

    return (
        <section>
            {/* The vans will populate the host vans list page using  a conditional rendering method if not then this */}
            <div>
                    <div className="vans-list-container"> {vansList} </div>
            </div>

        </section>

    );
}
