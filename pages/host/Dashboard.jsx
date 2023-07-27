import React from "react";
import { Outlet } from "react-router-dom";

export default function Income() {
  return (
    <>
      <h1>This is an Dashboard section</h1>
      <Outlet />
    </>
  );
}
