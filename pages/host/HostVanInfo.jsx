import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostVanInfo() {
  const { caravan } = useOutletContext();
  console.log(caravan.name);
  return (
    <>
      <ul>
        <li>
          Name: <span>{caravan.name}</span>
        </li>
        <li>
          Category: <span>{caravan.type}</span>
        </li>
        <li>
          Description: <p>{caravan.description}</p>
        </li>
        <li>
          Visibility: <span>{caravan.visibility}</span>
        </li>
      </ul>
    </>
  );
}
