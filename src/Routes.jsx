import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MapLayout from "./layouts/MapLayout";
import Map from "./pages/Map";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MapLayout />}>
          <Route path="/map" element={<Map />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
