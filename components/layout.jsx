import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";
export default function Layout() {
  return (
    <>
      <h1>This is a layout</h1>
      <Outlet />
    </>
  );
}
