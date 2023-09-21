import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {

    const {caravan} = useOutletContext();
    return (
        <>
        <img src={caravan.imageUrl} alt={`${caravan.name}`}/>
        </>
    )
}