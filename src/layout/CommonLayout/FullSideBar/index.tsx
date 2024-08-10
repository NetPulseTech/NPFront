import Image from "next/image";
import { FC } from "react";
import { AllApps, Href, SvgPath } from "../../../utils/constant/index";
import SideBarMenus from "./SideBarMenus";

const FullSideBar: FC = () => {
  return (
    <div className="sidebar-panel panel-lg">
      <div className="main-icon">
        <a href={Href}>
          <Image
            width={22}
            height={22}
            src={`${SvgPath}/sidebar-vector/menu.svg`}
            className="bar-icon-img"
            alt="menu"
          />
          <h4>{AllApps}</h4>
        </a>
      </div>
      <SideBarMenus />
       <div className="main-icon">
        <a href={Href}>
          <Image
            width={22}
            height={22}
            src={`${SvgPath}/sidebar-vector/next.svg`}
            className="bar-icon-img"
            alt="menu"
          />
          <h4>logout</h4>
        </a>
      </div>
    </div>
  );
};

export default FullSideBar;
