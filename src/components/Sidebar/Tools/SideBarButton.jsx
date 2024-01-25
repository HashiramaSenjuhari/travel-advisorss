import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const SideBarButton = ({ eventName, eventIcon, link }) => {
  return (
    <Link to={link}>
      <button className="group w-full p-4 hover:border-r-4 hover:border-r-purple-500 flex justify-between transition-all">
        <div className="flex gap-x-3 items-start font-semibold text-slate-700 group-hover:text-purple-700">
          {eventIcon}
          <h1>{eventName}</h1>
        </div>
        <span className="opacity-0 group-hover:opacity-100">
          <ArrowForwardIcon />
        </span>
      </button>
    </Link>
  );
};

export default SideBarButton;
