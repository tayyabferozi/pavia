import React from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./MapLayout.scss";
import Button from "../../components/Button";
import Sidebar from "./Sidebar/Sidebar";
import useModal from "../../hooks/useModal";
import Auth from "../../modals/Auth";
import { useState } from "react";

const MapLayout = () => {
  const { show, toggleShow } = useModal(false);
  const [loginForm, setLoginForm] = useState(false);

  const changeForm = (value) => {
    setLoginForm(value);
  };

  return (
    <>
      <Auth
        show={show}
        toggleShow={toggleShow}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
      />
      <div id="map-layout">
        <div className="app-bar">
          <div className="navbar">
            <FontAwesomeIcon icon={faChevronLeft} /> Map
          </div>
          <div className="header">
            <div>
              {/* <img className="logo" src="/assets/imgs/logo.png" alt="logo" /> */}
              <div className="logo">Akimme</div>
            </div>
            <div className="btns">
              <Button
                onClick={() => {
                  changeForm(false);
                  toggleShow();
                }}
                dark
              >
                Sign up
              </Button>
              <Button
                onClick={() => {
                  changeForm(true);
                  toggleShow();
                }}
                primary
              >
                Login
              </Button>
            </div>
          </div>
        </div>
        <div className="main-content">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MapLayout;
