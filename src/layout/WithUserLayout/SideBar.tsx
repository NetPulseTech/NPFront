import CustomImage from "@/Common/CustomImage";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { ImagePath } from "../../utils/constant";
import React, { FC } from "react";
import { Href } from "../../utils/constant/index";
import { smallSideBarData } from "@/Data/Layout";
import SvgIconCommon from "@/Common/SvgIconCommon";

const SideBar: FC = () => {
  return (
    <div className="sidebar-panel panel-lg dark-sidebar">
      <div className="user-wrap">
        <div className="profile-img">
          <div className="bg-size blur-up lazyloaded">
            <CustomImage src={`${ImagePath}/user-sm/14.jpg`} className="img-fluid blur-up bg-img lazyloaded" alt="profile"/>
          </div>
        </div>
        <div className="user-info">
          <h3>Paige Turner</h3>
          <h4>alabma, USA</h4>
        </div>
      </div>
      <div className="main-icon d-lg-none d-block">
        <a href={Href}><DynamicFeatherIcon iconName="Grid" className="bar-icon" /></a>
      </div>
      <ul className="sidebar-icon">
        {smallSideBarData.map((data, index) => (
          <li className={data.title === "newsfeed" ? "active" : ""} key={index}>
            <a href={Href}>
              <DynamicFeatherIcon iconName={data.icon} className="bar-icon" />
              <h4>{data.title}</h4>
            </a>
          </li>
        ))}
        <li>
          <a href={Href}>
            <SvgIconCommon iconName="cake" className="bar-icon fill-white" />
            <h4>events</h4>
          </a>
        </li>
        <li>
          <a href={Href}>
            <SvgIconCommon iconName="game-controller" className="bar-icon fill-white"/>
            <h4>games</h4>
          </a>
        </li>
      </ul>
      <div className="main-icon d-lg-none d-block">
        <a href={Href}>
          <DynamicFeatherIcon iconName="Power" className="bar-icon" />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
