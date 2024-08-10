import CustomImage from "@/Common/CustomImage";
import { Href, ImagePath, SvgPath } from "../../../utils/constant";
import SideBarMenus from "@/layout/CommonLayout/FullSideBar/SideBarMenus";
import Image from "next/image";
import React from "react";

const SideBarWithUser = () => {
  return (
    <div className="sidebar-panel panel-lg sidebar-light">
      <div className="user-wrap">
        <div className="profile-img">
          <div className="bg-size blur-up lazyloaded">
            <CustomImage
              src={`${ImagePath}/story/8.jpg`}
              className="img-fluid blur-up bg-img lazyloaded"
              alt="profile"
            />
          </div>
          <span className="stats">
            <Image
              width={15}
              height={15}
              src={`${ImagePath}/icon/verified.png`}
              className="img-fluid blur-up lazyloaded"
              alt="verified"
            />
          </span>
        </div>
        <div className="user-info">
          <h3>Paige Turner</h3>
          <h4>alabma, USA</h4>
        </div>
      </div>
      <SideBarMenus />
      <div className="main-icon">
        <a href={Href}>
          <Image width={22} height={22} src={`${SvgPath}/sidebar-vector/next.svg`} className="bar-icon-img" alt="menu"/>
          <h4>logout</h4>
        </a>
      </div>
    </div>
  );
};

export default SideBarWithUser;
