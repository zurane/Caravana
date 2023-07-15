import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const VanDetailPage = useParams();
  useEffect(() => {
    fetch(`/api/vans/:${VanDetailPage}`).then((data) => {
      console.log(data);
    });
  });
  return <h1>Van Detail page</h1>;
}
