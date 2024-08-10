import SideBarMenus from "@/layout/CommonLayout/FullSideBar/SideBarMenus";
import Image from "next/image";
import { AllApps, Href, SvgPath } from "../../../../utils/constant";

const SidebarPanel  = () => {

  return (
    <>
      <div className="main-icon">
        <a href={Href}>
          <Image width={22} height={22} src={`${SvgPath}/sidebar-vector/menu.svg`} className="bar-icon-img" alt="menu"/>
          <h4>{AllApps}</h4>
        </a>
      </div>
      <SideBarMenus />
      <div className="main-icon">
        <a href={Href}>
          <Image width={22} height={22} src={`${SvgPath}/sidebar-vector/next.svg`} className="bar-icon-img" alt="menu"/>
          <h4>logout</h4>
        </a>
      </div>
    </>
  );
};

export default SidebarPanel;
