import React from "react";
import SideBarButton from "./SideBarButton";

const SidebarComponent = ({event,eventName}) => {
  return (
    <div className=" pt-3 border-b">
      <div className="pl-4">
        <h2 className="font-semibold text-slate-500 text-[12px]">{eventName}</h2>
      </div>
      <div className="flex flex-col gap-y-1 ">
        {event.map(detail => (
        <SideBarButton eventName={detail.name} eventIcon={detail.icon} key={detail.id} link={detail.to}/>
        ))}
      </div>
    </div>
  );
};

export default SidebarComponent;
