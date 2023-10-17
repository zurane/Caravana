import React from "react";
import ReactDOM from "react-dom/client";
// The Router package or module is a standalone and does not come with the React
import {
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
import Detail, { loader as vanData } from "./pages/VanDetail";
import Login, { loader as urlQueryString, action as loginAction } from "./pages/Login";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVansData } from "./pages/host/HostVans";
import HostVansDetail, {
  loader as hostVanOverview,
} from "./pages/host/HostVansDetail";
import HostVanInfo from "./pages/Host/HostVanInfo/";
import HostVanPricing from "./pages/Host/HostVanPricing/";
import HostVanPhotos from "./pages/Host/HostVanPhotos/";
import { requiredAuth } from "./utils";
import "./server";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Navbar />}>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} loader={urlQueryString} action={loginAction} />
        <Route
          path="vans"
          element={<Vans />}
          loader={vansPageData}
          errorElement={<HandleError />}
        />
        <Route path="vans/:id" element={<Detail />} loader={vanData} />
        <Route
          path="host"
          element={<HostLayout />}
          loader={async () => await requiredAuth()}
        >
          <Route
            index
            element={<Dashboard />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="vans"
            element={<HostVans />}
            loader={hostVansData}
            errorElement={<HandleError />}
          />
          <Route
            path="vans/:id"
            element={<HostVansDetail />}
            loader={hostVanOverview}
          >
            <Route
              index
              element={<HostVanInfo />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="pricing"
              element={<HostVanPricing />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async () => {
                return null;
              }}
            />
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
