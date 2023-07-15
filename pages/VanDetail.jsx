import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [params.id]);

  const VanPageDetails = vans.map((details) => (
    <>
      <img src={details.imageUrl} alt="Caravan image" width="100%" />
      <div>
        <span className="type">{details.type}</span>
      </div>
    </>
  ));

  return <VanPageDetails />;
}
