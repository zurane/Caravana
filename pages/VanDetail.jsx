import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  console.log(params);
  return <h1>Van Detail page</h1>;
}
