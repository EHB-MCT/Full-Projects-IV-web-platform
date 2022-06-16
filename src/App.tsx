import React, { useEffect } from "react";

import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

import Livestream from "./pages/Livestream";
import Info from "./pages/Info.page";
import { Index } from "./pages/Index.page";
import Timetable from "./pages/Timetable.page";
import Notfound from "./pages/Notfound.page";

import Header from "./components/static/Header";

import logo from "./logo.svg";

import ReactGA from "react-ga";

import "./App.scss";

const TRACKING_ID = "UA-229998340-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App" id="app-container">
      <Header />
      <div id="page-container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="info" element={<Info />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="live" element={<Livestream />} />
          <Route path="admin">
            <Route path="hub" element={<p>hub</p>} />
            <Route path="showroom" element={<p>showroom</p>} />
          </Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
