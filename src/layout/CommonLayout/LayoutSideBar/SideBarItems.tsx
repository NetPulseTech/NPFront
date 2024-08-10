import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { sideBarData } from "@/Data/Layout";
import Link from "next/link";
import { FC } from "react";

const SideBarItems: FC = () => {
  return (
    <>
      {sideBarData.map((data, index) => (
        <li key={index}>
          <Link href={data.path}>
            <DynamicFeatherIcon iconName={data.icon} className="bar-icon" />
            <div className="tooltip-cls">
              <span>{data.tooltipTittle}</span>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default SideBarItems;
