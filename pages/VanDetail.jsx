import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const [caravans, render] = React.useState(null);
  const params = useParams();
  React.useEffect(() => {
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
          <span className="price">R{caravans.price}</span>
          <p>{caravans.description}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
