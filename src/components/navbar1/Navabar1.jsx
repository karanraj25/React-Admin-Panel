import React from "react";
import "./navbar1.scss";
import Settings from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { LiveTv } from "@mui/icons-material";
import { Call } from "@mui/icons-material";
import { PhoneAndroid } from "@mui/icons-material";
import { Forum } from "@mui/icons-material";
import { DialerSip } from "@mui/icons-material";
const Navbar1 = () => {
  return (
    <div className="navbar1">
      <div className="wrapper">
        <div>
          <DashboardIcon className="icon" />
          <h4>Dashboard</h4>
        </div>
        <div>
          <LiveTv className="icon" />
          <h4>Live</h4>
        </div>
        <div>
          <Call className="icon" />
          <h4>Calls</h4>
        </div>
        <div>
          <PhoneAndroid className="icon" />
          <h4>Phonebook</h4>
        </div>

        <div className="items">
          <div className="item">
            <DialerSip className="icon" />
            <h4>Dialer</h4>
          </div>
          <div className="item">
            <Forum className="icon" />
            <h4>Conversations</h4>
          </div>
          <div className="item">
            <Settings className="icon" />
            <h4>Settings</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
