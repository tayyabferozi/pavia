import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import GridContainer from "../../../components/GridContainer";
import Button from "../../../components/Button";
import Input from "../../../components/Input/Input";
import Switch from "../../../components/Switch";

const tabs = ["GENERAL", "MY PROFILE", "MY LAND"];

const Sidebar = () => {
  const [formState, setFormState] = useState({
    x: 0,
    y: 0,
    address: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sidebar">
      <div className="d-flex align-items-center ps-3 pt-2">
        <h4 className="">MAP</h4>
        <div className="ps-3">v3.1.2</div>
      </div>
      <div className="tabs-head">
        {tabs.map((el, idx) => {
          return (
            <Button
              className="tab-item"
              key={"tab-" + idx}
              disabled={idx !== 0}
            >
              {el}
            </Button>
          );
        })}
      </div>

      <div className="tab-content">
        <div>
          <Button lightGrey>RESET ZOOM</Button>
          <div className="pt-1">
            <Button className="mt-2" lightGrey>
              CLEAR HIGHLIGHTS
            </Button>
          </div>
        </div>

        <div className="mt-5">
          <Switch />
        </div>

        <div className="mt-4">
          <div>GO TO COORDINATE</div>

          <div className="pt-1">
            <div className="mt-2">
              <GridContainer className="pt-1" rowClassName="gx-2">
                <div className="col-lg-6">
                  <Input
                    name="x"
                    value={formState.x}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="col-lg-6">
                  <Input
                    name="y"
                    value={formState.y}
                    onChange={inputChangeHandler}
                  />
                </div>
              </GridContainer>
            </div>
          </div>
          <div className="pt-2">
            <Button className="mt-2" lightGrey>
              GO TO COORDINATE
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <div>
            FIND BY ADDRESS <FontAwesomeIcon className="ms-2" icon={faSearch} />
          </div>

          <div className="pt-1">
            <div className="mt-2">
              <div className="pt-1">
                <Input
                  name="address"
                  value={formState.address}
                  onChange={inputChangeHandler}
                  placeholder="Value"
                />
              </div>
            </div>
          </div>
          <div className="pt-2">
            <Button className="mt-2" lightGrey>
              HIGHEST LAND
            </Button>
          </div>
        </div>

        <div className="mt-5">
          <div>CURSOR COORDINATES</div>

          <div className="cursor-coordinates bg-light-gray rounded-lg mt-3">
            <div>SPACE</div>
            <h4 className="mt-1">(-321, -96)</h4>

            <img src="/assets/imgs/space.png" className="w-100" alt="space" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
