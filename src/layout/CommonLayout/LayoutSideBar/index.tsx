"use-client";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import React, { FC } from "react";
import { Href } from "../../../utils/constant/index";
import SideBarItems from "./SideBarItems";
import GamesList from "./GamesList";
import LogoutIcon from "./LogoutIcon";
import BirthdayList from "./BirthdayList";
import { CommonLayoutSideBarInterFace } from "@/layout/LayoutTypes";

const LayoutSideBar: FC<CommonLayoutSideBarInterFace> = ({sideBarClassName}) => {
  return (
    <div className={`sidebar-panel ${sideBarClassName? sideBarClassName:""}`}>
      <div className="main-icon">
        <a href={Href}>
          <DynamicFeatherIcon iconName="Grid" className="bar-icon" />
        </a>
      </div>
      <ul className="sidebar-icon">
        <SideBarItems />
        <BirthdayList />
        <GamesList />
      </ul>
      <LogoutIcon />
    </div>
  );
};

export default LayoutSideBar;
