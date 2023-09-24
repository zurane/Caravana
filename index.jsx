import React from "react";
import ReactDOM from "react-dom/client";
// The Router package or module is a standalone and does not come with the React
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import ErrorPage from "./pages/404";
import HandleError from "./components/HandleError";
import About from "./pages/About";
import Vans, { loader as vansPageData } from "./pages/Vans";
import Detail from "./pages/VanDetail";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/host/HostVans";
import HostVansDetail from "./pages/host/HostVansDetail";
import HostVanInfo from "./pages/Host/HostVanInfo/";
import HostVanPricing from "./pages/Host/HostVanPricing/";
import HostVanPhotos from "./pages/Host/HostVanPhotos/";
import "./server";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Navbar />}>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="vans"
          element={<Vans />}
          loader={vansPageData}
          errorElement={<HandleError />}
        />
        <Route path="vans/:id" element={<Detail />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVansDetail />}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return (
    // Routes help navigate to different sections and pages/components of your application without having to make any requests to the server.
    // The entire navigation system is handled by routes internally intercepting server requests, therefore, making your application faster
    // And a more delightful user experience.
    // With Routes you can build Single Page Applications ( Such as dashboards, chat applications and learning platforms etc)
    <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
