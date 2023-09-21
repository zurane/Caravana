import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo(){
const {caravan} = useOutletContext();
    return (
        <>
        <span>R{caravan.price}/day</span>
        </>
    )
}