import { FC } from "react";
import { Href } from "../../../../utils/constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { CommonHeaderInterface } from "@/layout/LayoutTypes";

const CommonHeader: FC<CommonHeaderInterface> = ({setIsOpen,isOpen,heading}) => {
  return (
    <div className="header-section" onClick={() => setIsOpen(!isOpen)}>
      <a href={Href}>
        {heading}
        <div className="down-arrow">
          <DynamicFeatherIcon
            iconName={isOpen ? "ChevronUp" : "ChevronDown"}
            className="icon-theme iw-14 ih-14"
          />
        </div>
      </a>
    </div>
  );
};

export default CommonHeader;
