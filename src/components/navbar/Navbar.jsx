import React from "react";
import "./navbar.scss";
import Settings from "@mui/icons-material/Settings";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Dashboard from "@mui/icons-material/Dashboard";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
          <Dashboard />
          <h3 className="cate">Category</h3>
          <Button className="button btn" variant="solid">
            Search
          </Button>
        </div>
        <div className="items">
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <Settings className="icon" />
          </div>
          <div className="item">
            <p>Nick Thomas </p>
            <img
              src="https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468_1280.jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
