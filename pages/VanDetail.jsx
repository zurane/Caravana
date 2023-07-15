import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const VanDetailPage = useParams();
  React.useEffect(() => {
    fetch(`/api/vans/${VanDetailPage.id}`).then((data) => {
      console.log(data);
    });
  }, [params.id]);
  return <h1>Van Detail page</h1>;
}
