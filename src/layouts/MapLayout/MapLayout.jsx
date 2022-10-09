import React from "react";
import { Outlet } from "react-router-dom";

const MapLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MapLayout;
