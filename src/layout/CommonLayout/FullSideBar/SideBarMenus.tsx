import { fullSideBarData } from "@/Data/common";
import React, { FC } from "react";
import { Href, SvgPath } from "../../../utils/constant/index";
import Image from "next/image";

const SideBarMenus: FC = () => {
  return (
    <ul className="sidebar-icon">
      {fullSideBarData.map((data, index) => (
        <li className={index=== 0 ?"active":""} key={index}>
          <a href={Href}>
            <Image
              width={22}
              height={22}
              src={`${SvgPath}/sidebar-vector/${data.iconName}.svg`}
              className="bar-icon-img"
              alt="news"
            />
            <h4>{data.title}</h4>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SideBarMenus;
