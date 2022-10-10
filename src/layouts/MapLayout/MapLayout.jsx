import React from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./MapLayout.scss";
import Button from "../../components/Button";
import Sidebar from "./Sidebar/Sidebar";

const MapLayout = () => {
  return (
    <div id="map-layout">
      <div className="app-bar">
        <div className="navbar">
          <FontAwesomeIcon icon={faChevronLeft} /> Map
        </div>
        <div className="header">
          <div>
            {/* <img className="logo" src="/assets/imgs/logo.png" alt="logo" /> */}
            <div className="logo">Metaverse Land</div>
          </div>
          <div className="btns">
            <Button dark>Sign up</Button>
            <Button primary>Login</Button>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default MapLayout;
