import { Box } from "@mui/material";
import React from "react";
import Logo from '../../assets/logo.svg';
import SidebarComponent from "./Tools/SidebarComponent";
import { Basic } from "./Tools/SideBarInfo";
import { Help } from "./Tools/SideBarInfo";

const Sidebar = () => {
  return (
    <Box className="w-full h-full flex flex-col border-r">
      <div className=" py-4 pl-3 border-b select-none">
        <img src={Logo} alt="logo" />
      </div>
      <div className="w-full h-full">
        <SidebarComponent event={Basic}eventName={'Basic'} />
        <SidebarComponent event={Help}eventName={'Help'} />
      </div>
    </Box>
  );
};

export default Sidebar;
